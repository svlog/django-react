import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import JwtService from "../services/JwtService";
import { useEffect } from "react";

const useStyles = makeStyles({
  container: {
    width: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid",
    borderRadius: "15px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  inputGroup: {
    marginBottom: "15px",
    width: "auto",
  },
  label: {
    display: "block",
    textAlign: "left",
    marginBottom: "5px",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  },
  error: {
    color: "red",
    fontSize: "14px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "auto",
    "&:hover": {
      backgroundColor: "#0056b3",
    },
  },
});

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  const classes = useStyles();
  const navigate = useNavigate();

  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    JwtService.init(); // Inicializa el servicio
    const token = JwtService.getAccessToken();

    if (token && JwtService.isAuthTokenValid(token)) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await JwtService.signInWithEmailAndPassword(
        username,
        password
      );

      if (response.access_token) {
        console.log("Authentication successful, redirecting to /users");
        navigate("/users");
      }
    } catch (err) {
      console.error("Login Error:", err);
      setError("Invalid credentials. Try again.");
      setToken("");
    }
  };

  return (
    <div className={classes.container}>
      <h2>User Login</h2>
      <form onSubmit={handleLogin} className={classes.form}>
        <div className={classes.inputGroup}>
          <label htmlFor="username" className={classes.label}>
            User:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className={classes.input}
          />
        </div>
        <div className={classes.inputGroup}>
          <label htmlFor="password" className={classes.label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={classes.input}
          />
        </div>
        {error && <p className={classes.error}>{error}</p>}
        <button type="submit" className={classes.button}>
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;

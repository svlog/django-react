const tryCatchWrapper = async (fn, errorMessage) => {
  try {
    return await fn();
  } catch (error) {
    console.error(errorMessage, error);
    throw error;
  }
};

const decodeToken = (token) => {
  try {
    const payload = token.split(".")[1];
    const decodedPayload = atob(payload);
    return JSON.parse(decodedPayload);
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

const isTokenExpired = (decodedToken) => {
  const now = Date.now() / 1000;
  return decodedToken.exp < now;
};

const JwtService = {
  init() {
    console.log("JwtService initialized");
  },

  getAccessToken() {
    return localStorage.getItem("access_token");
  },

  isAuthTokenValid() {
    const token = this.getAccessToken();
    if (!token) return false;

    const decodedToken = decodeToken(token);
    if (!decodedToken) return false;

    return !isTokenExpired(decodedToken);
  },

  async signInWithEmailAndPassword(username, password) {
    const url = "http://localhost:8000/auth/login/";
    const body = JSON.stringify({ username, password });

    return tryCatchWrapper(async () => {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });

      const data = await response.json();

      if (response.ok && data.access_token) {
        localStorage.setItem("access_token", data.access_token);
        return data;
      } else {
        throw new Error(data.message || "Failed to login");
      }
    }, "Login failed");
  },

  logout() {
    localStorage.removeItem("access_token");
  },
};

export default JwtService;

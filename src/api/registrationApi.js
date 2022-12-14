import axios from "axios";

export default axios.create({
  baseURL: "https://rate-my-professor-backend.herokuapp.com/",
  headers: { "Content-Type": "application/json" },
});

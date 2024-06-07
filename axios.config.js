import axios from "axios";

const myAxios = axios.create({
  baseURL: "https://assignment-11-server-nine-delta.vercel.app",
});

export default myAxios;

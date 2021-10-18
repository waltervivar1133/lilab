import axios from "axios";

const clienteAxios = axios.create({
  baseURL: "https://616526d109a29d0017c88f86.mockapi.io/",
});

export default clienteAxios;

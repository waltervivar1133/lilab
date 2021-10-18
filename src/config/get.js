import clienteAxios from "./axios";

export const getData = async () => {
  try {
    const post = clienteAxios.get("/post");
    return post;
  } catch (error) {
    console.log(error);
  }
};

import { endpoints } from "./apiUrl.js";

const getApi = async (url) => {
  return (await fetch(url)).json();
}

const getPostList = async () => {
  return await getApi(endpoints.POSTS);
}

export default getPostList;

// import { getEnvVars } from "./getEnvVars";

// const { VITE_API_KEY } = getEnvVars()
const  VITE_API_KEY  = 'jSSvw7hINL2v85M2N3caWpUwSlwtFBq5'

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${VITE_API_KEY}&q=${category}&limit=10`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((dataImg) => ({
    id: dataImg.id,
    title: dataImg.title,
    url: dataImg.images.downsized_medium.url,
  }));

  return gifs;
};

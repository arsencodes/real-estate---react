import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "e154d49c00mshf7fbef206fc3fc6p1e1e0fjsne81a652b096d"
    },
  });
    
  return data;
}
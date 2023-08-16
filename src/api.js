import axios from "axios";

const searcImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID H6lwIojx01Rt9snQ15XvaqGo1WsRd-kGJc3QNqEPNqQ",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searcImages;

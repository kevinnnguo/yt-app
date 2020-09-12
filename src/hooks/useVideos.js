import { useState, useEffect } from "react";
import Youtube from "../apis/youtube.js";

const useVideos = (defaultSearchTerm) => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideo(response.data.items);
  };

  return [video, search]
};

export default useVideos;

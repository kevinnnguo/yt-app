import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar.js";
import VideoList from "./VideoList.js";
import VideoDetail from "./VideoDetail.js";
import useVideos from "../hooks/useVideos.js";

const App = () => {

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("宫崎骏");

  useEffect(() => {
    setSelectedVideo(videos[0])
  },[videos])


  return (
    <div>
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearch={search} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>

            <div className="five wide column">
              <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

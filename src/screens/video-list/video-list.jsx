import React, { useState, useEffect } from 'react';
import VideoThumbnail from '../../components/video-thumbnail/video-thumbnail';
import { API_URL } from '../../constants/config';
import axios from 'axios'; // Import Axios

const VideoList = () => {
    const [videos, setVideos] = useState([]);
  
    useEffect(() => {
      // Fetch list of videos using Axios with API key
      axios.get(API_URL)
        .then(response => setVideos(response.data.data))
        .catch(error => console.error('Error fetching videos:', error));
    }, []);
  
    return (
      <div className="container">
        <h2>Video List</h2>
        <ul>
          {videos.map(video => (
            <VideoThumbnail key={video.id} video={video} />
          ))}
        </ul>
      </div>
    );
  };

  export default VideoList;
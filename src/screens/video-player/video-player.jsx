import React, { useState, useEffect } from 'react';
import { API_URL } from '../../constants/config';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import LikeButton from '../../components/like-button/like-button';
import VideoComments from '../../components/video-comments/video-comments';

const VideoPage = () => {
    const { id } = useParams();
    const [video, setVideo] = useState(null);
    const [liked, setLiked] = useState(false);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        //   Fetch video details using Axios with API key
        axios.get(`${API_URL}/${id}`)
            .then(response => setVideo(response.data))
            .catch(error => console.error('Error fetching video details:', error));
    }, [id]);

    const handleLike = () => {
        // Update the like status on the server
        setLiked(true)
    };

    const handleUnlike = () => {
        // Update the unlike status on the server
        setLiked(false)
    };

    const handleAddComment = () => {
        // Add a new comment on the server
        setComments([...comments, newComment])
        // Clear the new comment input
        setNewComment('');
    };

    if (!video) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <div className="video-details">
                <h2>{video.name}</h2>
                <ReactPlayer url={'https://peertube.cpy.re' + video.embedPath} controls width={'100%'} />
                <LikeButton liked={liked} handleLike={handleLike} handleUnlike={handleUnlike} />
                <div className='description'>
                    <p>{video.description}</p>
                </div>
                <VideoComments comments={comments} newComment={newComment} handleAddComment={handleAddComment} setNewComment={setNewComment} />
            </div>
        </div>
    );
};

export default VideoPage;
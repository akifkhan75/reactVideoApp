import { Link } from 'react-router-dom';

const VideoThumbnail = ({ video }) => (
    <li>
      <Link to={`/video/${video.id}`}>
        <img src={'https://peertube.cpy.re'+video.thumbnailPath} alt={video.name} className="thumbnail" />
        <h3 className='video-title'>{video.name}</h3>
      </Link>
    </li>
  );

export default VideoThumbnail
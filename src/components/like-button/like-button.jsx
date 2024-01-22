const LikeButton = ({liked, handleLike, handleUnlike}) => (
    <div className="like-section">
        {liked ? (
            <button onClick={handleUnlike}>Unlike</button>
        ) : (
            <button onClick={handleLike}>Like</button>
        )}
    </div>
)

export default LikeButton
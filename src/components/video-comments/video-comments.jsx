
const VideoComments = ({comments, newComment, handleAddComment, setNewComment}) => (
    <>
        <div className='add-comment'>
            <input
                type="text"
                placeholder="Add a comment..."
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
            />
            <button onClick={handleAddComment}>Add Comment</button>
        </div>
        <div className="comment-section">
            {comments.map(comment => (
                <div key={comment} className="comment">
                    {comment}
                </div>
            ))}

        </div>
    </>
);

export default VideoComments;
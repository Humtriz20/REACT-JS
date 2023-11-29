// src/components/Post.js
//this component will render and display the post we made
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsUp, faComment,faTrash} from '@fortawesome/free-solid-svg-icons'

const Post = ({ post,posts, onAddComment, onLikePost, onLikeComment, onDeletePost }) => {
  const [comment, setComment] = useState('');
  const [replyToIndex, setReplyToIndex] = useState(null);

  const handleAddComment = () => {
    //when we add comments we will render a text,like and we can reply to the comment
    const newComment = {
      text: comment,
      likes: 0,
      replies: [],
    };
  
    if (replyToIndex !== null) {
      const updatedPosts = posts.map((p) => {
        if (p === post) {
          const updatedComments = p.comments.map((c, index) => {
            if (index === replyToIndex) {
              return { ...c, replies: [...(c.replies || []), newComment] };
            }
            return c;
          });
  
          return { ...p, comments: updatedComments };
        }
        return p;
      });
  
      onAddComment(updatedPosts);
    } else {
      const updatedPosts = posts.map((p) => {
        if (p === post) {
          return { ...p, comments: [...(p.comments || []), newComment] };
        }
        return p;
      });
  
      onAddComment(updatedPosts);
    }
  
    //set the comment box to empty when added
    setComment('');
    setReplyToIndex(null);
  };

  
  
  const handleLikePost = () => {
    onLikePost(post);
  };

  

  const handleLikeComment = (commentIndex, replyIndex) => {
    if (replyIndex !== undefined) {
      const updatedPosts = post.comments.map((p) => {
        if (p === post) {
          const updatedComments = p.comments.map((comment, index) => {
            if (index === commentIndex) {
              const updatedReplies = comment.replies.map((reply, rIndex) => {
                if (rIndex === replyIndex) {
                  return {
                    ...reply,
                    likes: reply.likes + 1,
                  };
                }
                return reply;
              });

              return {
                ...comment,
                replies: updatedReplies,
              };
            }
            return comment;
          });

          return {
            ...p,
            comments: updatedComments,
          };
        }
        return p;
      });
      onLikeComment(updatedPosts);
    } else {
      const updatedPosts = post.comments.map((p) => {
        if (p === post) {
          const updatedComments = p.comments.map((comment, index) => {
            if (index === commentIndex) {
              return {
                ...comment,
                likes: comment.likes + 1,
              };
            }
            return comment;
          });

          return {
            ...p,
            comments: updatedComments,
          };
        }
        return p;
      });
      onLikeComment(updatedPosts);
    }
  };

  const handleDelete = () => {
    onDeletePost(post.id);
  };

  const handleReplyToComment = (index) => {
    setReplyToIndex(index);
  };

  return (
    <div className='h-0 mt-10 w-2/12'>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <span> <button onClick={handleDelete}><FontAwesomeIcon icon={faTrash} /></button></span>

      {post.mediaType === 'image' && <img src={post.mediaUrl} alt="" />}
      {post.mediaType === 'video' && (
        <video width="320" height="240" controls>
          <source src={post.mediaUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <div>
        <button onClick={handleLikePost}>
        <FontAwesomeIcon icon={faThumbsUp} />  {post.likes}
        </button>
       
      </div>

      <div>
        <h3>Comments</h3>
          {post.comments &&
          post.comments.map((comment, index) => (
          <div key={index} style={{ padding: '5px', margin: '5px' }}>
            <p>{comment.text}</p>
            <button onClick={() => handleLikeComment(index)}>
            <FontAwesomeIcon icon={faThumbsUp} />Like {comment.likes}
            </button>
            <button onClick={() => handleReplyToComment(index)}>
            <FontAwesomeIcon icon={faComment} /> Reply
            </button>

          {/* Display replies */}
          {comment.replies &&
          comment.replies.map((reply, replyIndex) => (
            <div key={replyIndex} style={{ marginLeft: '20px' }}>
              <p>{reply.text}</p>
              <button onClick={() => handleLikeComment(index, replyIndex)}>
                <FontAwesomeIcon icon={faThumbsUp} /> Like {reply.likes}
              </button>
            </div>
          ))}

        </div>
      ))}


      </div>

      <div>
        <input
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleAddComment}>
        <FontAwesomeIcon icon={faComment} /> Add Comment
        </button>
      </div>
    </div>
  );
};

export default Post;

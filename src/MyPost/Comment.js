// Comment.js
import React, { useState } from 'react';

const Comment = ({ id, text, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(id, editedComment);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <textarea
            value={editedComment}
            onChange={(e) => setEditedComment(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>{text}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Comment;

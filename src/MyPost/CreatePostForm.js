
//function to post either text,image or video
import React, { useState } from 'react';
import { FaImage, FaVideo } from 'react-icons/fa';

const CreatePostForm = ({ onCreatePost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [mediaType, setMediaType] = useState('image');
  const [file, setFile] = useState(null);

  const handleCreatePost = (e) => {
    e.preventDefault();
  
    const newPost = {
      title,
      content,
      mediaType, // Use the media type determined from the file
      mediaUrl: URL.createObjectURL(file),
      comments: [],
      likes: 0,
      id: Date.now(),
    };
  
    onCreatePost(newPost);
  
    // Reset form fields
    setTitle('');
    setContent('');
    setMediaType(''); // Remove this line
    setFile(null);
  };
  

  //function to select file 
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Determine media type based on file type
    if (selectedFile.type.includes('image')) {
      setMediaType('image');
    } else if (selectedFile.type.includes('video')) {
      setMediaType('video');
    }
  };

  return (
    <div>
      <h1>Create a Post</h1>
      <form onSubmit={handleCreatePost}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required /><br />

        <label>Content:</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} required></textarea><br />

        <div>
          <label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
            <FaImage /> Image
          </label>

          <label>
            <input
              type="file"
              accept="video/*"
              onChange={handleFileChange}
            />
            <FaVideo /> Video
          </label>
        </div>

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePostForm;
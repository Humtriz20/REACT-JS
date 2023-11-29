
import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = ({ items }) => {
  const { id } = useParams();
  const item = items.find(item => item.id === parseInt(id, 10));

  if (!item) {
    return <div>Item not found</div>;
  }
  console.log("Image path:", item.image); // Log the im
  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <img src={item.image} alt="" />
    </div>
  );
};

export default ItemDetails;

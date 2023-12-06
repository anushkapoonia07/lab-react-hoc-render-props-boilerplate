import React, { useState } from 'react';

const withLikeCounter = (WrappedComponent, label) => (props) => {

  const [likeCounter, setLikeCounter] = useState(0);
  const handleLikeCount = () => setLikeCounter(likeCounter + 1);
  return (
    <div>
      <WrappedComponent {...props} handleLikeCount={handleLikeCount} likeCounter={likeCounter} label={label} />
    </div>
  );
};

export default withLikeCounter;
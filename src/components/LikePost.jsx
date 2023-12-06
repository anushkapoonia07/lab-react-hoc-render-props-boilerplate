import React from 'react';
import withLikeCounter from './HOC';

const LikePost = ({ handleLikeCount, likeCounter, label }) => (
  <div>
    <button onClick={handleLikeCount}>Like {label} {likeCounter}</button>
  </div>
);

export default withLikeCounter(LikePost, 'Post');

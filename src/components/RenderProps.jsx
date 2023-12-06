import React, { useState } from 'react';

export default function LikeCounter({ render, label }) {

  const [likeCounter, setLikeCounter] = useState(0);
  const handleLikeCount = () => setLikeCounter(likeCounter + 1);
  return <div>{render(handleLikeCount, likeCounter, label)}</div>;
}


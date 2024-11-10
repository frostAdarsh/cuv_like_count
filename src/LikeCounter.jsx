import { useState } from "react";
import Like from "./Like";

const LikeCounter = () => {
  const [like, setLike] = useState(0);
  const addLike = () => {
    setLike((pre) => {
      return (pre += 1);
    });
  };
  const likeReset = () => {
    setLike(0);
  };
  return (
    <>
      <h3>Like Button</h3>
      <h1>{like}</h1>
      <Like addLike={addLike} likeReset={likeReset} />
    </>
  );
};

export default LikeCounter;

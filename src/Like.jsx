const Like = ({ addLike, likeReset }) => {
  return (
    <>
      <button onClick={addLike}>Like</button>
      <button onClick={likeReset}>Reset</button>
    </>
  );
};

export default Like;

import { useState } from "react";
import Comment from "./Comment";
import { HiArrowUp, HiArrowDown } from "react-icons/hi";
const Comments = () => {
  const [showComments, setShowComments] = useState(false);
  return (
    <>
      <div
        onClick={() => setShowComments((prev) => !prev)}
        className="my-4 flex cursor-pointer items-center justify-between border-b border-[#494949] pb-2"
      >
        <div className="flex items-center gap-4 ">
          <h2>Comments</h2>•<span>228</span>
        </div>
        <div>{showComments ? <HiArrowUp /> : <HiArrowDown />}</div>
      </div>
      {showComments && [...Array(8)].map(() => <Comment />)}
    </>
  );
};
export default Comments;

import { useState } from "react";
import { useGetVideoCommentsQuery } from "../services/youtubeApi";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import Skeleton from "../skeleton/Skeleton";
import { HiArrowUp, HiArrowDown } from "react-icons/hi";
const Comments = ({ count }) => {
  const { id } = useParams();
  const [showComments, setShowComments] = useState(false);
  const { data, isFetching } = useGetVideoCommentsQuery(id);
  if (isFetching) {
    return <Skeleton type="feed" />;
  }
  const comments = data?.items;
  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );

  return (
    <>
      <div
        onClick={() => setShowComments((prev) => !prev)}
        className="my-4 flex cursor-pointer items-center justify-between border-b border-[#494949] pb-2"
      >
        <div className="flex items-center gap-4 ">
          <h2>Comments</h2>•<span>{count}</span>
        </div>
        <div>{showComments ? <HiArrowUp /> : <HiArrowDown />}</div>
      </div>
      {showComments &&
        _comments.map((comment, i) => <Comment comment={comment} key={i} />)}
    </>
  );
};
export default Comments;

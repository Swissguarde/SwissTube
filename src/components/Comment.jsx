import moment from "moment";

const Comment = ({ comment }) => {
  const { authorDisplayName, authorProfileImageUrl, publishedAt, textDisplay } =
    comment;
  return (
    <div className="my-2 border-b border-[#494949]">
      <div className="flex items-center gap-4 text-xs">
        <div>
          <img
            src={authorProfileImageUrl}
            alt=""
            className="mb-2 h-6 w-6 rounded-[50%] object-cover"
          />
        </div>
        <div className="flex w-full items-center justify-between">
          <div>{authorDisplayName}</div>
          <div>• {moment(publishedAt).fromNow()}</div>
        </div>
      </div>
      <div className="text-[12px]">{textDisplay}</div>
    </div>
  );
};
export default Comment;

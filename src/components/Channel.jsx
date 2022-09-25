const Channel = ({ data }) => {
  const { snippet } = data;
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <>
      <div className="flex  flex-col items-center justify-between gap-4">
        <div>
          <img
            src={snippet?.thumbnails?.default?.url}
            className="h-full w-full rounded-[50%] object-cover"
            alt=""
          />
        </div>
        <div>{snippet.title}</div>
      </div>
      <div className="mt-4 text-center text-xs text-gray-400">
        {truncateString(snippet?.description, 65)}
      </div>
    </>
  );
};
export default Channel;

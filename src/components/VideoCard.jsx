import { Link } from "react-router-dom";
import numeral from "numeral";
import moment from "moment";
const VideoCard = ({ video }) => {
  // eslint-disable-next-line
  const isLoading = false;
  if (isLoading) {
    return (
      <div class="mx-auto w-full max-w-sm rounded-md border border-gray-800 p-4 shadow">
        <div class="flex animate-pulse space-x-4">
          <div class="h-10 w-10 rounded-full bg-slate-700"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="h-2 rounded bg-slate-700"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="col-span-2 h-2 rounded bg-slate-700"></div>
                <div class="col-span-1 h-2 rounded bg-slate-700"></div>
              </div>
              <div class="h-2 rounded bg-slate-700"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  const seconds = moment.duration(video?.contentDetails?.duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  return (
    <Link
      to={`/video-detail/${
        typeof video?.id === "string" ? video?.id : video?.id.videoId
      }`}
      className="h-full rounded bg-[#13131370] p-4 shadow-lg"
    >
      <div>
        <figure className="relative">
          <img
            src={video?.snippet?.thumbnails?.medium?.url}
            alt={video?.snippet?.title}
            className="mb-2 h-full w-full object-cover"
          />
          <div className="absolute bottom-1 right-1 bg-slate-600 p-1 text-xs">
            {_duration}
          </div>
        </figure>
      </div>
      <div className="flex items-center gap-3">
        <div>
          <img
            src="https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
            className="mb-2 h-8 w-8 rounded-[50%] object-cover"
          />
        </div>
        <div>
          <div className="mb-2 text-sm">
            {" "}
            {truncateString(video?.snippet?.title, 50)}
          </div>
          <div className="text-xs">{video?.snippet?.channelTitle}</div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <div>
              {" "}
              {numeral(video?.statistics?.viewCount).format("0.a")} views
            </div>{" "}
            • <div> {moment(video?.snippet?.publishedAt).fromNow()}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default VideoCard;

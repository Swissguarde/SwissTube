import { Link } from "react-router-dom";
import numeral from "numeral";
import moment from "moment";
import {
  useGetChannelDetailsQuery,
  useGetVideoByIdQuery,
} from "../services/youtubeApi";
import Skeleton from "../skeleton/Skeleton";
import Channel from "./Channel";
const VideoCard = ({ video, channelId, id, kind }) => {
  const { data, isFetching, error } = useGetChannelDetailsQuery(channelId);
  const { data: videoData, isFetching: isVideoFetching } =
    useGetVideoByIdQuery(id);
  if (isFetching) {
    return <Skeleton type="feed" />;
  }
  if (isVideoFetching) {
    return <></>;
  }
  if (error) {
    return <div>Error</div>;
  }
  const channelDetails = data?.items[0];
  const videoDetails = videoData?.items[0];
  const _viewCount = videoDetails?.statistics?.viewCount;
  const __duration = videoDetails?.contentDetails?.duration;
  const channelIcon = channelDetails?.snippet?.thumbnails?.default?.url;

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  const seconds = moment
    .duration(
      video?.contentDetails?.duration
        ? video?.contentDetails?.duration
        : __duration
    )
    .asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  const isChannel = kind === "youtube#channel";
  return (
    <Link
      to={`${isChannel ? `/channel/${channelId}` : `/video-detail/${id}`}`}
      className="h-full rounded bg-[#13131370] p-4 shadow-lg"
    >
      {!isChannel && (
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
      )}

      {isChannel ? (
        <Channel data={channelDetails} />
      ) : (
        <div className="flex items-center gap-3">
          <div>
            <img
              src={channelIcon}
              alt=""
              className="mb-2 h-8 w-8 rounded-[50%] object-cover"
            />
          </div>

          <div>
            <div className="mb-2 text-sm">
              {" "}
              {truncateString(video?.snippet?.title, 35)}
            </div>
            <div className="text-xs">{video?.snippet?.channelTitle}</div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <div>
                {" "}
                {numeral(video?.statistics?.viewCount || _viewCount).format(
                  "0.a"
                )}{" "}
                views
              </div>{" "}
              • <div> {moment(video?.snippet?.publishedAt).fromNow()}</div>
            </div>
          </div>
        </div>
      )}
    </Link>
  );
};
export default VideoCard;

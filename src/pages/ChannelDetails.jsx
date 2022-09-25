import numeral from "numeral";
import {
  useGetChannelVideosQuery,
  useGetUploadPlaylistQuery,
  useGetChannelDetailsQuery,
  useGetMoreChannelDetailsQuery,
} from "../services/youtubeApi";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import Skeleton from "../skeleton/Skeleton";

const ChannelDetails = () => {
  const { channelId } = useParams();
  const { data, isFetching } = useGetChannelVideosQuery(channelId);
  const playlistId = data?.items[0].contentDetails.relatedPlaylists.uploads;
  const { data: videoData, isFetching: isVideoDataFetching } =
    useGetUploadPlaylistQuery(playlistId);

  const { data: channelData } = useGetChannelDetailsQuery(channelId);
  const _channelData = channelData.items[0];
  const { data: moreChannelData } = useGetMoreChannelDetailsQuery(channelId);
  console.log(moreChannelData);
  const _moreChannelData = moreChannelData.items[0];
  if (isFetching || isVideoDataFetching) {
    return (
      <div className="grid w-full grid-cols-1 items-center justify-center gap-5 overflow-hidden p-4 md:grid-cols-3 lg:grid-cols-4">
        {[...Array(20)].map((i) => (
          <Skeleton type="feed" key={i} />
        ))}
      </div>
    );
  }
  const subCount = _moreChannelData?.statistics?.subscriberCount.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );

  return (
    <div className="p-4">
      <div className="mb-6 flex items-center gap-4 border-b border-[#494949] pb-2">
        <div>
          <img
            src={_channelData?.snippet?.thumbnails.default.url}
            className="h-20 w-20 rounded-[50%] object-cover"
            alt=""
          />
        </div>
        <div>
          <div className="text-gray-600">{_channelData?.snippet?.title}</div>
          <div>{subCount} subscribers</div>
          <div className="text-xs text-gray-300">
            {_moreChannelData?.statistics?.videoCount} videos
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 items-center justify-center gap-5 overflow-hidden md:grid-cols-3 lg:grid-cols-4">
        {videoData?.items.map((video) => (
          <VideoCard
            video={video}
            key={typeof video?.id === "string" ? video?.id : video?.id.videoId}
            id={video?.contentDetails?.videoId}
            channelId={video?.snippet?.channelId}
          />
        ))}
      </div>
    </div>
  );
};
export default ChannelDetails;

// {
//    <VideoCard
//             video={video}
//             key={typeof video?.id === "string" ? video?.id : video?.id.videoId}
//             id={typeof video?.id === "string" ? video?.id : video?.id.videoId}
//             channelId={video?.snippet?.channelId}
//           />
// }

import VideoCard from "../components/VideoCard";
import { useSelector } from "react-redux";
import { useGetSearchQuery } from "../services/youtubeApi";
import Skeleton from "../skeleton/Skeleton";
const Search = () => {
  const { searchQuery } = useSelector((state) => state.category);
  const { data, isFetching } = useGetSearchQuery(searchQuery);

  if (isFetching) {
    return (
      <div className="grid w-full grid-cols-1 items-center justify-center gap-5 overflow-hidden p-4 md:grid-cols-3 lg:grid-cols-4">
        {[...Array(20)].map((i) => (
          <Skeleton type="feed" key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid w-full grid-cols-1 items-center justify-center gap-5 overflow-hidden p-4 md:grid-cols-3 lg:grid-cols-4">
      {data?.items.map((video) => (
        <VideoCard
          kind={video?.id.kind}
          video={video}
          key={typeof video?.id === "string" ? video?.id : video?.id.videoId}
          id={typeof video?.id === "string" ? video?.id : video?.id.videoId}
          channelId={video?.snippet?.channelId}
        />
      ))}
    </div>
  );
};
export default Search;

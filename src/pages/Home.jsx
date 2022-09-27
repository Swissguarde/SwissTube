import { useGetVideosQuery } from "../services/youtubeApi";
import VideoCard from "../components/VideoCard";
import Skeleton from "../skeleton/Skeleton";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
const Home = () => {
  const { categoryName } = useSelector((state) => state.category);
  const { data, isFetching, error } = useGetVideosQuery(categoryName);
  if (isFetching) {
    return (
      <div className="grid w-full grid-cols-1 items-center justify-center gap-5 overflow-hidden p-4 md:grid-cols-3 lg:grid-cols-4">
        {[...Array(20)].map((i) => (
          <Skeleton type="feed" key={nanoid()} />
        ))}
      </div>
    );
  }
  if (error) {
    return <div>Error has occured</div>;
  }

  return (
    <div className="grid w-full grid-cols-1 items-center justify-center gap-5 overflow-hidden p-4 pb-20 md:grid-cols-3 lg:grid-cols-4">
      {data?.items.map((video) => (
        <VideoCard
          video={video}
          key={typeof video?.id === "string" ? video?.id : video?.id.videoId}
          id={typeof video?.id === "string" ? video?.id : video?.id.videoId}
          channelId={video?.snippet?.channelId}
        />
      ))}
    </div>
  );
};
export default Home;

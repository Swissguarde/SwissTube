import {
  useGetVideoByIdQuery,
  useGetRelatedVideosQuery,
} from "../services/youtubeApi";
import { useParams } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import Comments from "../components/Comments";
import VideoCard from "../components/VideoCard";
import Skeleton from "../skeleton/Skeleton";
import MetaData from "../components/MetaData";

const VideoDetails = () => {
  const params = useParams();
  const { id } = params;
  const { data, isFetching } = useGetVideoByIdQuery(id);
  const { data: relatedData, isFetching: relatedFetch } =
    useGetRelatedVideosQuery(id);
  if (isFetching || relatedFetch) {
    return (
      <div className="z-10 grid grid-cols-12 gap-4 bg-[#181818]">
        <div className="col-span-12 md:col-span-8">
          <div className="sticky top-20 mb-4 h-[35vh] p-0 sm:static sm:top-0 sm:h-[60vh] sm:p-4">
            <div className="anim h-[60vh] w-full bg-[#313131] "></div>
          </div>
          <div className="anim p-4">
            <div className="mb-4 h-5 w-[80%] bg-[#313131]"></div>
            <div className="mb-4 h-14 w-[70%] bg-[#313131]"></div>
          </div>
        </div>
        <div className="col-span-12 p-4 md:col-span-4">
          <div className="mb-4 h-5 w-[80%] bg-[#313131]"></div>
          <div className="grid w-full grid-cols-1 items-center justify-center gap-5 overflow-hidden">
            {[...Array(13)].map(() => (
              <Skeleton type="feed" key={nanoid()} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  const videoDetails = data?.items[0];
  const commentCount = videoDetails?.statistics?.commentCount.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );

  return (
    <div className="z-10 grid grid-cols-12 gap-4 bg-[#181818] pb-14">
      <div className="col-span-12 md:col-span-8">
        <div className="sticky top-20 mb-4 h-[35vh] p-0 sm:static sm:top-0 sm:h-[60vh] sm:p-4">
          <iframe
            src={`https://www.youtube.com/embed/${params.id}`}
            frameBorder="0"
            title="video"
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>

        <MetaData videoDetails={videoDetails} />
        <div className="p-4">
          <Comments count={commentCount} />
        </div>
      </div>

      <div className="col-span-12 p-4 md:col-span-4">
        <div className="mb-4 text-sm">Related videos</div>
        <div className="grid w-full grid-cols-1 items-center justify-center gap-5 overflow-hidden">
          {relatedData?.items.map((video, i) => (
            <VideoCard
              id={video?.id?.videoId}
              channelId={video?.snippet?.channelId}
              video={video}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default VideoDetails;

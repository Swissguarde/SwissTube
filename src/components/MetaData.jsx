import React from "react";
import numeral from "numeral";
import moment from "moment";
import { useGetMoreChannelDetailsQuery } from "../services/youtubeApi";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineShareAlt,
  AiOutlineSave,
} from "react-icons/ai";
import { MdMoreHoriz } from "react-icons/md";
import { useState } from "react";
const MetaData = ({ videoDetails }) => {
  const [showDesc, setShowDesc] = useState(false);
  const { channelTitle, description, title, publishedAt } =
    videoDetails?.snippet;
  const { viewCount, likeCount } = videoDetails?.statistics;
  const channelId = videoDetails?.snippet?.channelId;
  const { data, isFetching } = useGetMoreChannelDetailsQuery(channelId);

  if (isFetching) {
    return "Loading...";
  }
  const channelData = data.items[0];

  const menus = [
    { label: numeral(likeCount).format("0.a"), icon: AiOutlineLike },
    { label: "Dislike", icon: AiOutlineDislike },
    { label: "Share", icon: AiOutlineShareAlt, click: true },
    { label: "Save", icon: AiOutlineSave },
    { label: "More", icon: MdMoreHoriz },
  ];
  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("link copied!");
  };

  return (
    <div className="p-4">
      <div>{title}</div>
      <div className="flex items-center gap-2 text-xs text-gray-400">
        <div>{numeral(viewCount).format("0.a")} views </div> •{" "}
        <div>{moment(publishedAt).fromNow()}</div>
      </div>
      <div className="mt-6 flex items-center justify-between border-b border-[#494949] pb-2 ">
        {menus.map((menu, i) => (
          <div key={i} className="flex flex-col items-center">
            <div>{React.createElement(menu.icon, { size: "20" })}</div>
            <div onClick={menu?.click && handleClick}>{menu.label}</div>
          </div>
        ))}
      </div>
      <div
        onClick={() => setShowDesc((prev) => !prev)}
        className="flex cursor-pointer items-center justify-between border-b border-[#494949] py-2"
      >
        <div>Description •</div>{" "}
        <div className="text-xs text-green-500">click to expand</div>
      </div>
      {showDesc && <div className="py-2 text-sm">{description}</div>}
      <div className="mt-2 flex items-center justify-between border-b border-[#494949] pb-2">
        <div className="flex items-center gap-4">
          <img
            src={channelData?.snippet?.thumbnails?.default?.url}
            alt=""
            className="mb-2 h-10 w-10 rounded-[50%] object-cover"
          />
          <div className="flex flex-col text-sm">
            <div>{channelTitle}</div>
            <div>
              {numeral(channelData?.statistics?.subscriberCount).format("0.a")}{" "}
              subscribers
            </div>
          </div>
        </div>
        <div>
          <button className="border border-[#494949] p-2 text-sm">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};
export default MetaData;

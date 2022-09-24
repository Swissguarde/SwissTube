import "./skeleton.css";
const Skeleton = ({ type }) => {
  const FeedSkeleton = () => (
    <div className="postSk">
      <div className="postSkImg"></div>
      <div className="postSkInfo">
        <div className="postSkAvatar"></div>
        <div className="postSkDetail">
          <div className="postSkText"></div>
          <div className="postSkText sm"></div>
        </div>
      </div>
    </div>
  );

  const DetailsSkeleton = () => <div className="postSK detail"></div>;
  if (type === "feed") return <FeedSkeleton />;
  if (type === "details") return <DetailsSkeleton />;
};
export default Skeleton;

const Comment = () => {
  return (
    <div className="my-2 border-b border-[#494949]">
      <div className="flex items-center gap-4 text-xs">
        <div>
          <img
            src="https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
            className="mb-2 h-6 w-6 rounded-[50%] object-cover"
          />
        </div>
        <div className="flex w-full items-center justify-between">
          <div>John Mike</div>
          <div>• 16 hours ago</div>
        </div>
      </div>
      <div className="text-[12px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
        dolorem?
      </div>
    </div>
  );
};
export default Comment;

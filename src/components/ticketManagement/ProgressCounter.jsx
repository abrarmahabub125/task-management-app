const ProgressCounter = ({ pendingTasks }) => {
  return (
    <>
      <div className="w-full h-48 bg-linear-to-l from-violet-500 to-violet-400 relative rounded-md p-6 text-white">
        <img
          className="absolute h-48 left-0 top-0"
          src="https://customer-support-zone-byakio.surge.sh/assets/vector1-DuzL9jHe.png"
          alt="image1"
        />
        <div className="h-full w-full flex flex-col justify-center items-center">
          <p className="text-lg font-medium mb-5">In-Progress</p>
          <h1 className="text-5xl font-semibold">{pendingTasks.length}</h1>
        </div>
        <img
          className="absolute h-48 right-0 top-0"
          src="https://customer-support-zone-byakio.surge.sh/assets/vector2-DcOQQXsU.png"
          alt="image2"
        />
      </div>
    </>
  );
};

export default ProgressCounter;

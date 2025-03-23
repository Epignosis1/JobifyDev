import AppNav from "@/components/ui/AppNav";

function Dashboard() {
  const upPostsBtn = [
    {
      btn: "Upload your Cv",
      content: "Find your dream job with jobify",
      id: 1,
    },
    { btn: "Post a job", content: "Find the perfect candidate", id: 2 },
  ];
  return (
    <div>
      <AppNav />
      <div className=" h-[80vh] bg-purple-200 gap-6 pt-[100px] flex flex-col items-center   text-white font-medium text-center ">
        <h1 className="text-4xl text-purple-700 font-bold">
          Explore and discover the right job for you{" "}
        </h1>

        <form className="w-full bg-[#F3F4F63D] mt-6 py-6 bg-gradient-to-br from-[#6013ab] via-[#46008B] to-[#1B2095] flex flex-col gap-6 items-center ">
          <input
            type="text"
            className="w-[90%] text-black border placeholder:text-sm  border-blue-700 rounded-sm text-base p-2"
            placeholder="Job title, keywords or company"
          />
          <input
            type="text"
            className="w-[90%] text-base border-blue-700 placeholder:text-sm  rounded-sm p-2"
            placeholder="City"
          />
          <input
            type="text"
            placeholder="Country code"
            className="w-[90%] border-blue-700 placeholder:text-sm rounded-sm text-base p-2"
          />
          <button className="bg-blue-700  p-2 rounded-sm text-white text-base w-[90%]">
            Find a Job
          </button>
        </form>
      </div>

      <div className="flex flex-col my-[80px] gap-[70px] items-center text-center justify-center">
        {upPostsBtn.map((upPost) => (
          <div key={upPost.id}>
            <button className="text-black border-2 border-purple-700 font-semibold mb-4 w-[260px] p-2 rounded-3xl text-lg">
              {upPost.btn}
            </button>
            <p className="text-sm text-gray-700 ">{upPost.content}</p>
          </div>
        ))}
      </div>

      <div className="text-center text-sm text-gray-500">
        <p>&copy; 2025 Jobify ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
}

export default Dashboard;

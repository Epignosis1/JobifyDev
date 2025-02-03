function Banner() {
  return (
    <div className=" gap-4 p-8 text-white h-[70vh] flex flex-col bg-gradient-to-r from-[var(--dark-purple)] to-[var(--light-purple)] justify-center text-center">
      <h1 className="md:text-6xl text-4xl font-semibold">
        Find new{" "}
        <span className="text-[var(--primary-orange)]">Employment</span>{" "}
        Posssibilities
      </h1>
      <p className="md:text-xl text-base">
        Create an account, complete your profile and wait for the appropriate
        oppourtunities
      </p>
      <button className="bg-[var(--primary-orange)] mt-4 w-32 mx-auto text-black py-2 rounded">
        Explore
      </button>
    </div>
  );
}

export default Banner;

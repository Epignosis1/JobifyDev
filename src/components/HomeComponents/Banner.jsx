function Banner({ children }) {
  return (
    <div className=" gap-4 p-8 text-white  h-[70vh] flex flex-col bg-gradient-to-r from-[var(--dark-purple)] to-[var(--light-purple)] justify-center text-center">
      {children}
    </div>
  );
}

export default Banner;

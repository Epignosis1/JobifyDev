const SignOptbtn = ({ children, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-[var(--light-purple)]  text-white p-2 rounded-lg"
      >
        Sign up as {children}
      </button>
    </div>
  );
};
export default SignOptbtn;

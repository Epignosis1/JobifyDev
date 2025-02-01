import PropTypes from "prop-types";

function Continue({ Logo, Text }) {
  return (
    <div className="flex  gap-x-8 items-center text-[#74737e] w-[500px] mx-auto my-4 justify-center bg-[#f2f4f8] py-2 rounded-full ">
      <div>
        <img
          src={Logo}
          className={Logo === "/Google.svg" ? "h-8 w-8 ml-3" : "h-6 w-6 ml-8"}
        />
      </div>
      Continue with {Text}
    </div>
  );
}

Continue.propTypes = {
  Logo: PropTypes.string.isRequired,
  Text: PropTypes.string.isRequired,
};
export default Continue;

import PropTypes from "prop-types";

function Continue({ Logo, Text }) {
  return (
    <div className="flex  gap-x-8 items-center text-[#74737e] w-[400px] mx-auto my-4 justify-center shadow-lg bg-white py-2 border-opacity-10 rounded-full ">
      <div>
        <img
          src={Logo}
          className={Logo === "/Google.svg" ? " w-7 ml-3" : " w-6 ml-8"}
        />
      </div>
      <p className="text-sm">Continue with {Text}</p>
    </div>
  );
}

Continue.propTypes = {
  Logo: PropTypes.string.isRequired,
  Text: PropTypes.string.isRequired,
};
export default Continue;

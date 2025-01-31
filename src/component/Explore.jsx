import PropTypes from "prop-types";
function Explore({ mainLinks, mainHeader, mainParagraph }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <img src={mainLinks} className="w-[1100px]  mt-[40px]" />
      <h1 className="text-5xl mt-4">{mainHeader}</h1>
      <p className="text-xl">{mainParagraph}</p>
      <button className="bg-[#2A033F] mt-4  text-white w-32 py-2 rounded">
        Explore
      </button>
    </div>
  );
}

Explore.propTypes = {
  mainLinks: PropTypes.string.isRequired,
  mainHeader: PropTypes.string.isRequired,
  mainParagraph: PropTypes.string.isRequired,
};
export default Explore;

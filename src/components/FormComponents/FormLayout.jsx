function FormLayout({ children, header, paragraph }) {
  return (
    <div className="md:flex bg-gray-200 bg-opacity-25 md:gap-5 rounded-lg border-[1px] border-purple-200 p-5 md:mx-20   bg-white">
      <div className="mb-3">
        <p className="text-2xl mb-4">{header}</p>
        <p className="text-gray-500 text-base">{paragraph}</p>
      </div>
      {children}
    </div>
  );
}

export default FormLayout;

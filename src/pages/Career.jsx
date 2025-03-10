function Career() {
  const careers = [
    {
      img: "download(1).jpg",
      header: "Health Care",
      id: 1,
      description:
        "Healthcare refers to the organized provision of medical services to maintain or improve people’s health.",
    },
    {
      img: "download(2).jpg",
      header: "Product Management",
      id: 2,
      description:
        "Product management is the process of guiding a product’s development, from idea to market, to ensure it meets customer needs and business goals",
    },
    {
      img: "download(9).jpg",
      header: "Science",
      id: 9,
      description:
        " Science is the systematic study of the natural world through observation, experimentation, and analysis.",
    },
    {
      img: "download(3).jpg",
      header: "Data analytics",
      id: 3,
      description:
        "Data analytics is the process of examining raw data to extract useful insights, identify patterns, and support decision-making.",
    },
    {
      img: "download(4).jpg",
      header: "Enginiering",
      id: 4,
      description:
        "Engineering is the application of science, mathematics, and technology to design, build, and improve structures, machines, systems, and processes that solve real-world problems. ",
    },
    {
      img: "download(5).jpg",
      header: "Finance",
      id: 5,
      description:
        "Finance is the study and management of money, investments, and financial systems. It involves planning, raising, investing, and monitoring funds to ensure financial stability and growth.",
    },
    {
      img: "download(6).jpg",
      header: "Sales & Marketing",
      id: 6,
      description:
        "Sales & Marketing focuses on creating awareness and attracting potential customers to a product or service.",
    },
    {
      img: "download(7).jpg",
      header: "Software Devlopment",
      id: 7,
      description:
        "Software development is the process of designing, coding, testing, and maintaining applications, systems, and programs that run on computers and other devices.",
    },
    {
      img: "download(8).jpg",
      header: "Psychology",
      id: 8,
      description:
        "Psychology is the scientific study of the mind and behavior. It explores how people think, feel, and act in different situations, aiming to understand and improve mental health, decision-making, and human interactions.",
    },
  ];
  return (
    <div>
      <div className="bg-[url('/blue.jpg')] bg-cover bg-center h-[50vh] w-full text-center flex justify-center ">
        <h2 className="lg:text-5xl text-3xl mt-40 font-bold ">
          Explore{" "}
          <span className="text-[var(--primary-orange)]">different</span>{" "}
          Careers and get insights{" "}
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2">
        {careers.map((career) => (
          <div
            key={career.id}
            className="grid items-strech grid-cols-2 gap-4 m-8"
          >
            <img
              src={career.img}
              alt="careerimg"
              className="rounded object-cover w-auto"
            />
            <div className="h-auto">
              <p className="text-2xl font-bold ">{career.header}</p>
              <p className="text-sm text-gray-500">{career.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Career;

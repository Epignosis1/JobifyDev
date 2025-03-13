import {
  UserPlus,
  FileText,
  Search,
  Send,
  ClipboardCheck,
  CheckCircle,
} from "lucide-react";

function Works() {
  const steps = [
    {
      icon: UserPlus,
      text: "Sign Up",
      description: "Create an account with your basic details",
    },
    {
      icon: FileText,
      text: "Complete your profile",
      description: "Upload yoour resume and fill in work experience",
    },
    {
      icon: Search,
      text: "Search for Jobs",
      description: "Browse and filter job listings that match your skills",
    },
    {
      icon: Send,
      text: "Apply for Jobs",
      description: "Submit application with one click",
    },
    {
      icon: ClipboardCheck,
      text: "Track Application",
      description: "Receive updates on application status",
    },
    {
      icon: CheckCircle,
      text: "Get Hired",
      description: "Accept offers and start your new job",
    },
  ];
  return (
    <section className="  my-[120px]">
      <div className=" max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          How it <span className="text-blue-800">works</span>
        </h2>
        <div className=" w-[400px]  md:w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {steps.map(({ icon: Icon, text, description }, index) => (
            <div
              className="flex border border-gray-200 items-start   gap-4 p-8 bg-white shadow-md rounded-lg"
              key={index}
            >
              <Icon size={36} className=" basis-1/5 text-blue-500" />
              <div>
                <h3 className="text-lg font-semibold">{text}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;

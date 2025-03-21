import {
  UserPlus,
  FileText,
  Search,
  Send,
  ClipboardCheck,
  CheckCircle,
} from "lucide-react";
import Motion from "./Motion";

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
      description: "Upload your resume and fill in work experience",
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
    <Motion>
      <section className="  my-[120px]">
        <div className="  m-4 text-center p-8 bg-gray-100 rounded-xl">
          <h2 className="text-3xl md:text-4xl mt-4 font-bold mb-12">
            How it <span className="text-blue-800">works</span>
          </h2>
          <div className=" md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map(({ icon: Icon, text, description }, index) => (
              <div
                className=" flex h-[180px] flex-col  border border-gray-300  text-left gap-4 p-8 bg-white rounded-xl"
                key={index}
              >
                <div className="w-full  flex items-center justify-start gap-3">
                  <Icon
                    size={44}
                    className=" bg-blue-50 p-3 rounded-xl font-bold text-blue-800"
                  />
                  <h3 className="text-lg font-semibold">{text}</h3>
                </div>

                <p className=" text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Motion>
  );
}

export default Works;

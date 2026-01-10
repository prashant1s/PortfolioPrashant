// import { Button } from "@/components/Button";
// import { Eye } from "lucide-react";

// export const Resume = () => {
//   return (
//     <section id="resume" className="py-32 relative">
//       <div className="container mx-auto px-6 max-w-4xl text-center">
//         {/* Heading */}
//         <h2 className="text-4xl md:text-5xl font-bold mb-6">
//           Resume
//         </h2>

//         <p className="text-muted-foreground max-w-4xl mx-auto mb-10">
//           Download or view my resume to learn more about my skills, experience,
//           and projects.
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-wrap justify-center gap-5">
//           {/* View Resume */}
//           <a
//             href="./projects/myresume.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Button size="lg" variant="outline">
//               <Eye className="w-6 h-7" />
//               View Resume
//             </Button>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };


import { Button } from "@/components/Button";
import { Eye, Download } from "lucide-react";

export const Resume = () => {
  return (
    <section id="resume" className="py-25 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Resume
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Preview my resume directly on the website or open it in full screen.
          </p>
        </div>

        {/* Resume Preview */}
        <div className="hidden lg:block mb-10">
        <div className="relative w-full h-310 rounded-3xl overflow-hidden mb-10">
          <iframe
            src="./projects/myresume.pdf#view=FitH&zoom=100&toolbar=0&navpanes=0&scrollbar=0"
            title="Resume Preview"
            className="w-full h-full border-0"
          />
        </div>
        </div>
        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-5">
          {/* View Full Screen */}
          <a
            href="./projects/myresume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline">
              <Eye className="w-6 h-7" />
              View Full Screen
            </Button>
          </a>

          
        </div>
      </div>
    </section>
  );
};

import React from "react";
import confetti from "canvas-confetti";
import User from "./assets/Amit.jpg";
import Exp from "./assets/DGS.jpg";

import { ConfettiButton } from "@/components/magicui/confetti";
import BlurFade from "@/components/magicui/blur-fade";

function App() {
  const whatsappUrl = "https://wa.me/917019635195?text=Hi";
  const linkedinUrl = "https://www.linkedin.com/messaging/";
  const mailUrl =
    "https://mail.google.com/mail/?view=cm&fs=1&to=amitgadad@gmail.com&su=Hello&body=Hi%20there,";

  const triggerConfettiAndOpen = (url, e) => {
    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;
    const originX = clickX / rect.width;
    const originY = clickY / rect.height;

    confetti({
      particleCount: 120,
      spread: 80,
      startVelocity: 40,
      origin: { x: originX, y: originY },
    });

    setTimeout(() => {
      const newWindow = window.open(url, "_blank", "noopener,noreferrer");
      if (newWindow) newWindow.opener = null;
    }, 300);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 font-sans text-neutral-800 leading-relaxed">
      {/* Intro Section */}
      <BlurFade delay={0.2} inView>
        <section className="mt-20 max-w-4xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-14">
            <div className="text-left md:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
                Hey, I am Amitkumar 👋
              </h1>
              <p className="text-base sm:text-lg font-light text-neutral-700 space-y-5">
                Survey Programmer (Analyst) with a keen eye for design and an
                expanding skill set in web technologies.
              </p>
            </div>
            <img
              src={User}
              className="h-32 w-32 sm:h-40 sm:w-40 object-cover rounded-full shadow-lg"
              alt="Amitkumar"
            />
          </div>
        </section>
      </BlurFade>

      {/* About Section */}
      <BlurFade delay={0.4} inView>
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6">About Me</h2>
          <p className="text-base sm:text-lg font-light text-neutral-700 space-y-5">
            <span className="block text-lg sm:text-xl font-semibold text-neutral-900">
              Analyst by profession, designer at heart.
            </span>
            After completing both a diploma and a degree in Computer Science
            Engineering, I started my career in{" "}
            <span className="font-medium">2021</span> with{" "}
            <span className="font-semibold underline">
              Ugam Solutions (now Dentsu Global Services)
            </span>{" "}
            as an Associate Analyst. I’ve worked extensively with tools like{" "}
            <span className="font-semibold underline">Decipher</span>,{" "}
            <span className="font-semibold underline">SurveyToGo</span>, and
            later transitioned to{" "}
            <span className="font-semibold underline">Qualtrics</span> as a
            Survey Programmer.
            <br />
            <br />
            Over time, I discovered my true passion lies in{" "}
            <span className="font-semibold underline">web design</span>—where
            creativity meets technology. I'm now transitioning into the web
            design space, bringing along my analytical mindset, problem-solving
            skills, and a deep interest in creating clean, intuitive, and
            user-focused websites.
            <br />
            <br />
            <span className="block mt-3 font-medium">
              Excited to build digital experiences that not only look great but
              also work seamlessly.
            </span>
          </p>
        </section>
      </BlurFade>

      {/* Work Experience */}
      <BlurFade delay={0.6} inView>
        <section className="mt-16 max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-black mb-2">
            Work Experience
          </h1>
          <p className="font-light text-neutral-500 mb-4">
            I am an analyst, I create surveys and work as a survey programmer.
          </p>

          {[{
            img: Exp,
            title: "Dentsu Global Services",
            subtitle: "Analyst",
            date: "Sep 2021 – Present"
          }].map((exp, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-5"
            >
              <div className="flex items-center gap-4">
                <img
                  src={exp.img}
                  className="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-contain bg-white border"
                  alt={exp.title}
                />
                <div>
                  <h2 className="text-sm sm:text-base font-medium">
                    {exp.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {exp.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-sm text-neutral-500 font-light sm:text-right">
                {exp.date}
              </p>
            </div>
          ))}
        </section>
      </BlurFade>

      {/* Projects Section */}
<BlurFade delay={0.7} inView>
  <section className="mt-16 max-w-4xl mx-auto">
    <h1 className="text-2xl sm:text-3xl font-black mb-2">Projects</h1>
    <p className="font-light text-neutral-500 mb-4">
      A glimpse of my work in web technologies.
    </p>

    <div className="flex items-center gap-4">
      <div>
        <h2 className="text-lg sm:text-xl font-semibold">
          Voice Interview GPT (React + Tailwind)
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 mt-2">
          A web app built using <span className="font-medium">React</span> and{" "}
          <span className="font-medium">Tailwind CSS</span> where respondents
          are shown random <span className="font-medium">JavaScript questions</span>. 
          They answer via <span className="font-medium">voice input</span>, and 
          GPT provides instant <span className="font-medium">feedback</span> on 
          their answers — simulating a real interview experience.
        </p>
      </div>
    </div>
  </section>
</BlurFade>


      {/* Contact Section */}
      <BlurFade delay={0.8} inView>
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg font-light text-neutral-700 mb-6">
            Connect with me on WhatsApp, LinkedIn, or Email.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <ConfettiButton
              className="px-6 py-2 w-full sm:w-auto text-center font-medium rounded-full border border-neutral-300 bg-white shadow-sm text-black hover:bg-neutral-800 hover:text-white transition-all"
              onClick={(e) => triggerConfettiAndOpen(whatsappUrl, e)}
            >
              Say Hi on WhatsApp
            </ConfettiButton>

            <ConfettiButton
              className="px-6 py-2 w-full sm:w-auto text-center font-medium rounded-full border border-neutral-300 bg-white shadow-sm text-black hover:bg-neutral-800 hover:text-white transition-all"
              onClick={(e) => triggerConfettiAndOpen(linkedinUrl, e)}
            >
              Message on LinkedIn
            </ConfettiButton>

            <ConfettiButton
              className="px-6 py-2 w-full sm:w-auto text-center font-medium rounded-full border border-neutral-300 bg-white shadow-sm text-black hover:bg-neutral-800 hover:text-white transition-all"
              onClick={(e) => triggerConfettiAndOpen(mailUrl, e)}
            >
              Email me
            </ConfettiButton>
          </div>
        </section>
      </BlurFade>
    </div>
  );
}

export default App;

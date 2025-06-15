import React from "react";
import confetti from "canvas-confetti";
import User from './assets/Amit.jpg';
import Exp from './assets/Merkle.png';
import { ConfettiButton } from "@/components/magicui/confetti";
import BlurFade from "@/components/magicui/blur-fade";

function App() {
  const whatsappUrl = "https://wa.me/917019635195?text=Hi";
  const linkedinUrl = "https://www.linkedin.com/messaging/";
  const mailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=amitgadad@gmail.com&su=Hello&body=Hi%20there,";

  const triggerConfettiAndOpen = (url) => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      const newWindow = window.open(url, "_blank", "noopener,noreferrer");
      if (newWindow) newWindow.opener = null;
    }, 300);
  };

  return (
    <>
      <BlurFade delay={0.5} inView>
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Intro Section */}
          <section className="mt-16 max-w-4xl mx-auto">
            <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-14">
              <div className="text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black">
                  Hey, I am Amitkumar 👋
                </h1>
                <p className="mt-3 text-base sm:text-lg font-light text-gray-700">
                  Analyst turned Web Designer. I love creating clean,
                  user-friendly websites and turning ideas into interactive
                  designs.
                </p>
              </div>
              <img
                src={User}
                className="h-32 w-32 sm:h-40 sm:w-40 object-cover rounded-full shadow-md"
                alt="Amitkumar"
              />
            </div>
          </section>

          {/* About Section */}
          <section className="mt-16 max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-black mb-4">About Me</h1>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 p-2 sm:p-4 bg-white rounded-md shadow-sm">
              <span className="block text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                Analyst by profession, designer at heart.
              </span>
              After completing both a diploma and a degree in Computer Science Engineering, I started my career in <span className="font-medium text-gray-900">2021</span> with <span className="font-semibold underline">Ugam Solutions (now Merkle, a dentsu company)</span> as an Associate Analyst. 
              I’ve worked extensively with tools like <span className="font-semibold underline">Decipher</span>, <span className="font-semibold underline">SurveyToGo</span>, and later transitioned to <span className="font-semibold underline">Qualtrics</span> as a Survey Programmer.
              <br /><br />
              Over time, I discovered my true passion lies in <span className="font-semibold underline">web design</span>—where creativity meets technology. I'm now transitioning into the web design space, bringing along my analytical mindset, problem-solving skills, and a deep interest in creating clean, intuitive, and user-focused websites.
              <br /><br />
              <span className="block mt-3 font-medium text-bold">
                Excited to build digital experiences that not only look great but also work seamlessly.
              </span>
            </p>
          </section>

          {/* Work Experience */}
          <section className="mt-16 max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-black mb-2">Work Experience</h1>
            <p className="font-light text-neutral-500 mb-4">
              I am an analyst, I create surveys and work as a survey programmer.
            </p>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={Exp}
                  className="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-contain bg-white border"
                  alt="Merkle"
                />
                <div>
                  <h2 className="text-sm sm:text-base font-medium">
                    Merkle, a dentsu company
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600">Analyst</p>
                </div>
              </div>
              <p className="text-sm text-neutral-500 font-light sm:text-right">
                Sep 2021 – Present
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mt-16 mb-24 max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-black mb-2">Get in Touch</h1>
            <p className="font-light text-neutral-500 mb-4">
              Feel free to connect with me on WhatsApp or LinkedIn. I’m happy to assist and will respond as promptly as possible. Kindly refrain from unsolicited messages.
            </p>
            <div className="flex flex-wrap gap-4">
              <ConfettiButton
                className="px-5 py-2 font-light rounded-full shadow-md"
                onClick={() => triggerConfettiAndOpen(whatsappUrl)}
              >
                Say Hi on WhatsApp
              </ConfettiButton>

              <ConfettiButton
                className="px-5 py-2 font-light rounded-full shadow-md"
                onClick={() => triggerConfettiAndOpen(linkedinUrl)}
              >
                Message on LinkedIn
              </ConfettiButton>

              <ConfettiButton
                className="px-5 py-2 font-light rounded-full shadow-md"
                onClick={() => triggerConfettiAndOpen(mailUrl)}
              >
                Email me
              </ConfettiButton>
            </div>
          </section>
        </div>
      </BlurFade>
    </>
  );
}

export default App;

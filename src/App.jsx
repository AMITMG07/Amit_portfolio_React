import React from "react";
import confetti from "canvas-confetti";
import User from './assets/Amit.jpg';
import Exp from './assets/ugam.jpg';
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
      <section className="mt-12 w-[700px] mx-auto">
        <BlurFade delay={0.5} inView>
          {/* Intro Section */}
          <section className="mt-12 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-center">
              <div>
                <h1 className="text-4xl font-black">Hey, I am Amitkumar 👋</h1>
                <p className="font-light text-lg mt-2">
                  Analyst turned Web Designer. I love creating clean,
                  user-friendly websites and turning ideas into interactive
                  designs.
                </p>
              </div>
              <img
                src={User}
                className="h-40 w-40 object-cover rounded-full shadow-md"
                alt="Amitkumar"
              />
            </div>
          </section>

          {/* About Section */}
          <section className="mt-12 max-w-2xl mx-auto">
            <h1 className="text-2xl font-black">About Me</h1>
            <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto p-4">
              <span className="block text-xl font-semibold text-gray-900 mb-4">
                Analyst by profession, designer at heart.
              </span>
              After completing both a diploma and a degree in Computer Science Engineering, I started my career in <span className="font-medium text-gray-900">2021</span> with <span className="font-semibold text-blue-600">Ugam Solutions (now Merkle, a dentsu company)</span> as an Associate Analyst. 
              I’ve worked extensively with tools like <span className="font-semibold text-blue-600">Decipher</span>, <span className="font-semibold text-blue-600">SurveyToGo</span>, and later transitioned to <span className="font-semibold text-blue-600">Qualtrics</span> as a Survey Programmer.
              <br /><br />
              Over time, I discovered my true passion lies in <span className="font-semibold text-pink-600">web design</span>—where creativity meets technology. I'm now transitioning into the web design space, bringing along my analytical mindset, problem-solving skills, and a deep interest in creating clean, intuitive, and user-focused websites.
              <br /><br />
              <span className="block mt-2 font-medium text-green-600">
                Excited to build digital experiences that not only look great but also work seamlessly.
              </span>
            </p>
          </section>

          {/* Work Experience */}
          <section className="mt-12 max-w-2xl mx-auto">
            <h1 className="text-2xl font-black">Work Experience</h1>
            <p className="font-light text-neutral-500">
              I am an analyst, I create surveys and work as a survey programmer.
            </p>
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img src={Exp} className="h-16 w-16 rounded-full object-cover" alt="Merkle" />
                  <div>
                    <h2 className="text-sm font-medium">Merkle, a dentsu company</h2>
                    <p className="text-xs text-gray-600">Analyst</p>
                  </div>
                </div>
                <p className="text-neutral-500 font-light text-sm">Sep 2021 – Present</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mt-12 mb-36 max-w-2xl mx-auto">
            <h1 className="text-2xl font-black">Get in Touch</h1>
            <p className="font-light text-neutral-500">
              Feel free to connect with me on WhatsApp or LinkedIn. I’m happy to assist and will respond as promptly as possible. Kindly refrain from unsolicited messages.
            </p>
            <div className="relative flex flex-wrap gap-2">
              <ConfettiButton
                className="mt-4 px-5 py-2 font-light rounded-full shadow-sm"
                onClick={() => triggerConfettiAndOpen(whatsappUrl)}
              >
                Say Hi on WhatsApp
              </ConfettiButton>

              <ConfettiButton
                className="mt-4 px-5 py-2 font-light rounded-full shadow-sm"
                onClick={() => triggerConfettiAndOpen(linkedinUrl)}
              >
                Message on LinkedIn
              </ConfettiButton>

              <ConfettiButton
                className="mt-4 px-5 py-2 font-light rounded-full shadow-sm"
                onClick={() => triggerConfettiAndOpen(mailUrl)}
              >
                Email me
              </ConfettiButton>
            </div>
          </section>
        </BlurFade>
      </section>
    </>
  );
}

export default App;

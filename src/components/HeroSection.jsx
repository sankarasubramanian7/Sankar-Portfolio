import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 md:pt-32"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        {/* Profile Image */}
        <div className="flex justify-center mb-6 ">
        <div className="absolute w-36 h-36 md:w-44 md:h-44 bg-primary/30 rounded-full blur-2xl animate-pulse z-0"></div>
          <img
            src="./src/assets/Sankar07.jpg"
            alt="Sankara Subramanian"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary shadow-lg 
            relative z-10 transition duration-300 hover:scale-110 hover:shadow-2xl"
                      />
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Sankara
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Subramanian
            </span>
          </h1>

          <p className="mt-3 text-lg md:text-2xl font-semibold text-primary text-center">
            <span className="role-rotate"></span>
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I create stellar web experiences with modern technologies.
            Specializing as a Full Stack Developer with a strong focus on
            Front-End Development, I build interfaces that are both beautiful
            and functional.
          </p>

          <div className="pt-14 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

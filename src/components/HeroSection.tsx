import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-primary/10 to-background px-4">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-foreground animate-fade-in-down">
          Hi, I'm <span className="text-primary">[Your Name]</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground animate-fade-in-up delay-200">
          A passionate Software Developer building modern and clean web applications.
        </p>
        <div className="flex justify-center space-x-4 animate-fade-in-up delay-400">
          <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">View My Work</Button>
          <Button variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">Get In Touch</Button>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>
    </section>
  );
};

export default HeroSection;

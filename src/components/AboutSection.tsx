const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-secondary/10">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold text-foreground">About Me</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Hello! I'm [Your Name], a dedicated software developer with a passion for creating intuitive and efficient web experiences. 
          I specialize in front-end development using React and TypeScript, crafting clean and maintainable code. 
          My journey in tech began with a fascination for how digital products come to life, leading me to constantly explore new technologies and best practices.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Beyond coding, I enjoy [Your Hobby 1, e.g., hiking, reading, gaming] and [Your Hobby 2, e.g., exploring new cafes, photography]. 
          I believe that continuous learning and a curious mindset are key to building innovative solutions. 
          I'm always open to collaborating on exciting projects and connecting with fellow tech enthusiasts.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;

import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-secondary/10">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold text-foreground">Get In Touch</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Have a project in mind or just want to say hello? Feel free to reach out!
          I'm always open to new opportunities and collaborations.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" asChild>
            <a href="mailto:your.email@example.com">Email Me</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

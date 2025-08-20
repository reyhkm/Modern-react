const Footer = () => {
  return (
    <footer className="w-full py-8 px-6 bg-primary text-primary-foreground text-center">
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <p className="text-sm mt-2">Built with React, Vite, and Shadcn UI.</p>
    </footer>
  );
};

export default Footer;

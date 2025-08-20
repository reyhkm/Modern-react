import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center fixed top-0 left-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="text-lg font-bold text-primary">YourName</div>
      <div className="space-x-4">
        <Button variant="ghost" className="text-foreground hover:text-primary">About</Button>
        <Button variant="ghost" className="text-foreground hover:text-primary">Projects</Button>
        <Button variant="ghost" className="text-foreground hover:text-primary">Contact</Button>
      </div>
    </nav>
  );
};

export default Navbar;

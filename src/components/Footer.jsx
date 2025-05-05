import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
    <a
      href="#hero"
      className="cosmic-button p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors mb-4"
    >
      <ArrowUp size={20} />
    </a>
    
    
    <footer className="py-2 px-2">
  <p className="text-sm text-muted-foreground text-center">
    &copy; {new Date().getFullYear()} Sankara Subramanian. All rights reserved.
  </p>
</footer>
</div>

  );
};

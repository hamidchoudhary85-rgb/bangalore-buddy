import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface HeaderProps {
  onContactClick: () => void;
}

const Header = ({ onContactClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <MapPin className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">
            CityBuddy <span className="text-primary">AI</span>
          </span>
        </div>
        <Button onClick={onContactClick}>Contact Us</Button>
      </div>
    </header>
  );
};

export default Header;

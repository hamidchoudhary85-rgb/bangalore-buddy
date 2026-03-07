import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <MapPin className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">
              CityBuddy <span className="text-primary">AI</span>
            </span>
          </div>

          <div className="flex flex-col items-center gap-3 text-sm text-muted-foreground md:flex-row md:gap-6">
            <a href="mailto:support@citybuddyai.com" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Mail className="h-4 w-4" />
              support@citybuddyai.com
            </a>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              Bangalore, Karnataka, India
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} CityBuddy AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

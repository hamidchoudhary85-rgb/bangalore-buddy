import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const categories = [
  "Rent", "Schools", "Hospitals", "Metro", "Commute", "Malls", "Safety", "Family", "Budget",
];

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search by area, category (e.g. schools, metro, budget)..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-14 rounded-full border-2 border-primary/20 bg-card pl-12 pr-6 text-base shadow-sm transition-shadow focus:shadow-md"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onChange(cat.toLowerCase())}
            className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;

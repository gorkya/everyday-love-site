import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar = ({ value, onChange, placeholder = "Поиск..." }: SearchBarProps) => {
  return (
    <div className="relative max-w-md mx-auto mb-8">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-everyday-brown" />
      </div>
      <Input
        type="text"
        placeholder={placeholder}
        className="pl-10 bg-white border-everyday-brown/30 focus:border-everyday-brown"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
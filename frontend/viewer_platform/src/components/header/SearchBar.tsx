import { SearchBarWrapper, SearchInput } from "@/ui/header/SearchBar";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <SearchBarWrapper>
      <Search className="w-5 h-5 text-gray-500" />
      <SearchInput type="text" placeholder="Search..." />
    </SearchBarWrapper>
  );
}

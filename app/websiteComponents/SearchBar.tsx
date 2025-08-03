import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchBar = () => {
  return (
    <form className="hidden md:block max-w max-w-fit">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative">
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <MagnifyingGlassIcon className="w-4 h-4 text-muted-foreground" />
        </div>
        <input
          type="search"
          id="search"
          placeholder="Search components"
          required
          className="w-full pl-10 pr-28 py-2.5 text-sm rounded-lg border border-border text-foreground placeholder:text-muted-foreground bg-transparent backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
        />
      </div>
    </form>
  );
};

export default SearchBar;
import { Bell, Search, Plus, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="h-16 border-b border-gray-200 bg-white sticky top-0 z-30 flex items-center justify-between px-4 sm:px-6 shadow-sm">
      {/* Mobile menu button */}
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Search */}
      <div className="relative flex-1 max-w-md mx-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input
          placeholder="Search..."
          className="pl-10 bg-gray-50 border-gray-200 h-10 text-gray-900 placeholder:text-gray-500 focus:border-primary focus:ring-primary/20"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 sm:gap-4">
        <Button
          variant="default"
          size="sm"
          className="gap-2 bg-primary hover:bg-primary/90 text-white shadow-sm rounded-lg hidden sm:flex"
        >
          <Plus className="w-4 h-4" />
          <span className="hidden md:inline">New Alert</span>
        </Button>

        <button className="relative p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <div className="flex items-center gap-3 pl-2 sm:pl-4 border-l border-gray-200">
          <Avatar className="w-8 h-8 sm:w-9 sm:h-9 ring-2 ring-primary/20">
            <AvatarImage src="/postbank.jpg" />
            <AvatarFallback className="bg-primary text-white text-sm">
              LPB
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-gray-900">
              Lesotho Post Bank
            </p>
            <p className="text-xs text-gray-600">Pro Plan</p>
          </div>
        </div>
      </div>
    </header>
  );
};

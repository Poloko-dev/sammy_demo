import { Bell, Search, Plus, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="h-16 border-b border-purple-900/30 bg-gray-900/50 backdrop-blur-xl sticky top-0 z-30 flex items-center justify-between px-4 sm:px-6 shadow-lg">
      {/* Mobile menu button */}
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Search */}
      <div className="relative flex-1 max-w-md mx-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input
          placeholder="Search..."
          className="pl-10 bg-gray-800/50 border-purple-900/30 h-10 text-gray-200 placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500/20"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 sm:gap-4">
        <Button
          variant="default"
          size="sm"
          className="gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg shadow-purple-500/20 rounded-full hidden sm:flex"
        >
          <Plus className="w-4 h-4" />
          <span className="hidden md:inline">New Alert</span>
        </Button>

        <button className="relative p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full shadow-glow" />
        </button>

        <div className="flex items-center gap-3 pl-2 sm:pl-4 border-l border-purple-900/30">
          <Avatar className="w-8 h-8 sm:w-9 sm:h-9 ring-2 ring-purple-500/30">
            <AvatarImage src="/postbank.jpg" />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-sm">
              LPB
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-white">Lesotho Post Bank</p>
            <p className="text-xs text-purple-300">Pro Plan</p>
          </div>
        </div>
      </div>
    </header>
  );
};

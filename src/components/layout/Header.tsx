import { Bell, Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Header = () => {
  return (
    <header className="h-16 border-b border-purple-900/30 bg-gray-900/50 backdrop-blur-xl sticky top-0 z-30 flex items-center justify-between px-6 shadow-lg">
      {/* Search */}
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input
          placeholder="Search mentions, alerts, or sources..."
          className="pl-10 bg-gray-800/50 border-purple-900/30 h-10 text-gray-200 placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500/20"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <Button
          variant="default"
          size="sm"
          className="gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg shadow-purple-500/20 rounded-full"
        >
          <Plus className="w-4 h-4" />
          New Alert
        </Button>

        <button className="relative p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full shadow-glow" />
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-purple-900/30">
          <Avatar className="w-9 h-9 ring-2 ring-purple-500/30">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-white">John Doe</p>
            <p className="text-xs text-purple-300">Pro Plan</p>
          </div>
        </div>
      </div>
    </header>
  );
};

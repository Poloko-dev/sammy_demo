import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Bell,
  MessageSquare,
  BarChart3,
  Settings,
  Users,
  Globe,
  TrendingUp,
  FileText,
  ChevronLeft,
  ChevronRight,
  X,
  Sliders,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Bell, label: "Alerts", path: "/alerts" },
  { icon: MessageSquare, label: "Mentions", path: "/mentions" },
  { icon: FileText, label: "Reports", path: "/reports" },
  { icon: Sliders, label: "Configuration", path: "/configuration" },
];

const bottomItems = [{ icon: Settings, label: "Settings", path: "/settings" }];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-screen bg-white border-r border-gray-200 transition-all duration-300 flex flex-col shadow-lg",
          collapsed ? "w-16" : "w-64",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Mobile close button */}
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-3 px-4 h-16 border-b border-gray-200">
          <img
            src="/SaMMy.png"
            alt="SaMMy Logo"
            className="w-9 h-9 rounded-xl object-contain"
          />
          {!collapsed && (
            <span className="font-bold text-xl text-gray-900 tracking-tight">
              SaMMy
            </span>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                )
              }
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Bottom section */}
        <div className="px-3 py-4 border-t border-gray-200 space-y-1">
          {bottomItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                )
              }
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          ))}

          {/* Collapse toggle */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 w-full"
          >
            {collapsed ? (
              <ChevronRight className="w-5 h-5" />
            ) : (
              <>
                <ChevronLeft className="w-5 h-5" />
                <span>Collapse</span>
              </>
            )}
          </button>
        </div>
      </aside>
    </>
  );
};

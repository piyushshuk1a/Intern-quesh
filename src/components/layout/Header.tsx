import { NavLink } from "@/components/ui/nav-link";
import { Button } from "@/components/ui/button";
import { GraduationCap, User, Award, Users } from "lucide-react";

interface HeaderProps {
  currentPath: string;
}

export const Header = ({ currentPath }: HeaderProps) => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            InternHub
          </h1>
        </div>

        <nav className="hidden md:flex items-center space-x-2">
          <NavLink href="/" isActive={currentPath === "/"}>
            <User className="w-4 h-4 mr-2 inline" />
            Dashboard
          </NavLink>
          <NavLink href="/leaderboard" isActive={currentPath === "/leaderboard"}>
            <Award className="w-4 h-4 mr-2 inline" />
            Leaderboard
          </NavLink>
          <NavLink href="/rewards" isActive={currentPath === "/rewards"}>
            <Users className="w-4 h-4 mr-2 inline" />
            Rewards
          </NavLink>
        </nav>

        <Button
  variant="outline"
  size="sm"
  onClick={() => {
    localStorage.removeItem("token"); // or the key your app uses
    window.location.href = "/login";  // or use a router redirect if using React Router
  }}
>
  Logout
</Button>

      </div>
    </header>
  );
};
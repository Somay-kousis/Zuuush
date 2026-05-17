import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, UserCircle, Users, PlusCircle, Leaf, Star } from 'lucide-react';

const NavLink = ({ to, icon: Icon, active = false }: { to: string, icon: any, active?: boolean }) => (
  <Link 
    to={to} 
    className={`p-3 md:p-3 rounded-xl md:rounded-2xl transition-all duration-300 ${
      active 
        ? 'bg-primary-600 text-white shadow-md' 
        : 'text-textSecondary hover:bg-white/50 hover:text-primary-600'
    }`}
  >
    <Icon className="w-5 h-5 md:w-6 md:h-6" />
  </Link>
);

const Navigation: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="fixed bottom-0 md:bottom-auto left-0 md:top-0 w-full md:h-full md:w-24 h-20 flex flex-row md:flex-col items-center justify-around md:justify-start md:py-8 z-50 bg-surfaceGlass/90 backdrop-blur-xl border-t md:border-t-0 md:border-r border-white/40 shadow-glass-up md:shadow-none">
      
      <Link to="/" className="hidden md:flex w-12 h-12 rounded-full bg-accent text-white items-center justify-center mb-8 hover:scale-105 transition-transform shadow-md">
        <span className="font-serif font-bold text-xl">Z</span>
      </Link>

      <div className="flex-1 flex flex-row md:flex-col items-center justify-around md:justify-start w-full md:w-auto px-4 md:px-0 gap-0 md:gap-4">
        <NavLink to="/dashboard" icon={LayoutDashboard} active={currentPath === '/dashboard'} />
        <NavLink to="/rooms" icon={Users} active={currentPath === '/rooms' || currentPath === '/search-room'} />
        <NavLink to="/create-room" icon={PlusCircle} active={currentPath === '/create-room'} />
        <NavLink to="/challenges" icon={Leaf} active={currentPath === '/challenges'} />
        <NavLink to="/achievements" icon={Star} active={currentPath === '/achievements'} />
        <NavLink to="/profile" icon={UserCircle} active={currentPath === '/profile'} />
      </div>
    </nav>
  );
};

export default Navigation;

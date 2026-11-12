import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sparkles, 
  MapPin, 
  Compass, 
  Gem, 
  Landmark, 
  UtensilsCrossed, 
  Map, 
  Info, 
  Heart, 
  User, 
  Menu, 
  X,
  LogOut 
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, openAuthModal, logout } = useAuth();

  const navLinks = [
    { label: 'Home', path: '/', icon: Compass },
    { label: 'Explore', path: '/explore', icon: MapPin },
    { label: 'AI Trip Planner', path: '/planner', icon: Sparkles, highlight: true },
    { label: 'Hidden Gems', path: '/hidden-gems', icon: Gem },
    { label: 'Heritage & Culture', path: '/heritage', icon: Landmark },
    { label: 'Food & Trails', path: '/food', icon: UtensilsCrossed },
    { label: 'Map', path: '/map', icon: Map },
    { label: 'About', path: '/about', icon: Info },
  ];

  const favoritesCount = user?.favoriteDestinationIds?.length || 0;

  return (
    <header className="sticky top-0 z-40 bg-cream-100/90 backdrop-blur-md border-b border-forest-800/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-forest-800 flex items-center justify-center text-gold-400 shadow-soft group-hover:scale-105 transition-transform">
              <span className="font-serif font-black text-xl tracking-wider">KA</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-bold text-lg text-forest-900 tracking-tight">Karnataka Tourism</span>
                <span className="bg-gold-400/20 text-gold-700 text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wide uppercase border border-gold-400/40">AI</span>
              </div>
              <p className="text-[11px] font-medium text-charcoal-500 tracking-wide">One State. Many Worlds. 💛❤️</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;

              if (link.highlight) {
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="ml-2 flex items-center gap-2 px-4 py-2 rounded-full bg-forest-800 text-cream-50 font-semibold text-sm hover:bg-forest-700 shadow-soft transition-all hover:scale-105 border border-forest-600"
                  >
                    <Sparkles className="w-4 h-4 text-gold-400 animate-pulse" />
                    <span>Plan My Trip</span>
                  </Link>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-forest-900 bg-forest-800/10 font-semibold'
                      : 'text-charcoal-600 hover:text-forest-800 hover:bg-forest-800/5'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-forest-800' : 'text-charcoal-400'}`} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Favourites shortcut */}
            <Link
              to="/profile?tab=favorites"
              className="relative p-2 rounded-full hover:bg-forest-800/5 text-charcoal-700 hover:text-forest-800 transition-colors"
              title="Saved Favorites"
            >
              <Heart className="w-5 h-5" />
              {favoritesCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-forest-800 text-gold-400 text-[11px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </Link>

            {/* User profile / Login */}
            {isAuthenticated ? (
              <div className="relative group">
                <Link
                  to="/profile"
                  className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full bg-white border border-forest-800/15 hover:border-forest-800/30 transition-all shadow-sm"
                >
                  {user?.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-7 h-7 rounded-full object-cover ring-1 ring-gold-400"
                    />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-forest-800 text-gold-400 font-bold text-xs flex items-center justify-center ring-1 ring-gold-400/50">
                      {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                  )}
                  <span className="text-xs font-semibold text-charcoal-800 max-w-[90px] truncate">
                    {user?.name.split(' ')[0]}
                  </span>
                </Link>

                {/* Dropdown Menu */}
                <div className="absolute right-0 top-full pt-2 hidden group-hover:block z-50">
                  <div className="w-52 bg-white rounded-2xl shadow-elevated border border-forest-800/15 p-2 space-y-1">
                    <div className="px-3 py-2 border-b border-charcoal-100">
                      <div className="font-bold text-xs text-charcoal-900 truncate">{user?.name}</div>
                      <div className="text-[10px] text-charcoal-500 truncate">{user?.email}</div>
                    </div>
                    <Link
                      to="/profile"
                      className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-charcoal-700 hover:bg-forest-50 hover:text-forest-800 transition-colors"
                    >
                      <User className="w-3.5 h-3.5 text-forest-700" />
                      <span>My Profile & Trips</span>
                    </Link>
                    <Link
                      to="/profile?tab=favorites"
                      className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-charcoal-700 hover:bg-forest-50 hover:text-forest-800 transition-colors"
                    >
                      <Heart className="w-3.5 h-3.5 text-red-500" />
                      <span>Favorites ({favoritesCount})</span>
                    </Link>
                    <button
                      onClick={logout}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors text-left"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={openAuthModal}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-forest-800 bg-white border border-forest-800/20 hover:bg-forest-50 transition-all shadow-sm"
              >
                <User className="w-4 h-4" />
                <span>Sign In</span>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/planner"
              className="px-3 py-1.5 rounded-full bg-forest-800 text-cream-50 font-semibold text-xs flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Plan</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-charcoal-700 hover:bg-forest-800/10 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cream-100 border-b border-forest-800/15 px-4 pt-2 pb-6 space-y-1 shadow-elevated">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium ${
                  isActive
                    ? 'bg-forest-800 text-cream-50 font-semibold'
                    : 'text-charcoal-700 hover:bg-forest-800/10'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-gold-400' : 'text-charcoal-500'}`} />
                <span>{link.label}</span>
              </Link>
            );
          })}

          <div className="pt-4 border-t border-forest-800/10">
            {isAuthenticated ? (
              <div className="space-y-2">
                <Link
                  to="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-forest-50"
                >
                  {user?.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-9 h-9 rounded-full object-cover ring-2 ring-forest-800"
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-forest-800 text-gold-400 font-bold text-sm flex items-center justify-center ring-2 ring-forest-800">
                      {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                  )}
                  <div>
                    <div className="text-sm font-semibold text-charcoal-900">{user?.name}</div>
                    <div className="text-xs text-charcoal-500">{user?.email}</div>
                  </div>
                </Link>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    logout();
                  }}
                  className="w-full py-2.5 rounded-xl bg-red-50 text-red-600 text-xs font-bold border border-red-200 flex items-center justify-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAuthModal();
                }}
                className="w-full py-2.5 rounded-xl bg-forest-800 text-cream-50 text-sm font-semibold flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4" />
                <span>Sign In / Demo Login</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};


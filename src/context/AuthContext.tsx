import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserProfile } from '../types/user';
import { GeneratedItinerary } from '../types/itinerary';
import { storageService } from '../services/storageService';
import { useToast } from './ToastContext';

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isAuthModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  login: (name: string, email: string) => void;
  logout: () => void;
  toggleFavorite: (destinationId: string) => void;
  isFavorite: (destinationId: string) => boolean;
  saveItinerary: (itinerary: GeneratedItinerary) => void;
  deleteItinerary: (id: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    const loaded = storageService.getUser();
    setUser(loaded);
  }, []);

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  const login = (name: string, email: string) => {
    const updated: UserProfile = {
      id: `user-${Date.now()}`,
      name,
      email,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      joinedDate: 'Joined Today',
      savedItineraries: user ? user.savedItineraries : [],
      favoriteDestinationIds: user ? user.favoriteDestinationIds : ['hampi', 'coorg'],
      tripHistory: user ? user.tripHistory : []
    };
    storageService.saveUser(updated);
    setUser(updated);
    closeAuthModal();
    showToast(`Welcome back, ${name}! Logged in successfully.`, 'success');
  };

  const logout = () => {
    storageService.clearUser();
    setUser(null);
    showToast('Signed out successfully.', 'info');
  };

  const toggleFavorite = (destinationId: string) => {
    if (!user) {
      openAuthModal();
      showToast('Please sign in to save your favorite destinations.', 'info');
      return;
    }
    const isNowFav = storageService.toggleFavorite(destinationId);
    setUser(storageService.getUser());
    if (isNowFav) {
      showToast('Added to your favorite destinations!', 'success');
    } else {
      showToast('Removed from your favorites.', 'info');
    }
  };

  const isFavorite = (destinationId: string): boolean => {
    return user ? user.favoriteDestinationIds.includes(destinationId) : false;
  };

  const saveItinerary = (itinerary: GeneratedItinerary) => {
    if (!user) {
      openAuthModal();
      showToast('Please sign in to save itineraries to your profile.', 'info');
      return;
    }
    storageService.saveItinerary(itinerary);
    setUser(storageService.getUser());
    showToast('Itinerary saved to your profile!', 'success');
  };

  const deleteItinerary = (id: string) => {
    storageService.deleteItinerary(id);
    setUser(storageService.getUser());
    showToast('Itinerary deleted.', 'info');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isAuthModalOpen,
        openAuthModal,
        closeAuthModal,
        login,
        logout,
        toggleFavorite,
        isFavorite,
        saveItinerary,
        deleteItinerary
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};


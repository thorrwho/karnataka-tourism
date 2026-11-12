import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { DESTINATIONS } from '../data/destinations';
import { DestinationCard } from '../components/common/DestinationCard';
import { DestinationModal } from '../components/common/DestinationModal';
import { Destination } from '../types/destination';
import { GeneratedItinerary } from '../types/itinerary';
import { 
  User, 
  Bookmark, 
  Heart, 
  Calendar, 
  Trash2, 
  Printer, 
  Eye, 
  LogOut, 
  Compass, 
  Sparkles,
  Camera,
  X,
  Upload
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ProfilePage: React.FC = () => {
  const { user, isAuthenticated, logout, openAuthModal, deleteItinerary, updateAvatar } = useAuth();
  const [activeTab, setActiveTab] = useState<'itineraries' | 'favorites' | 'history'>('itineraries');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [viewingItinerary, setViewingItinerary] = useState<GeneratedItinerary | null>(null);
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);
  const [newAvatarUrl, setNewAvatarUrl] = useState('');
  const navigate = useNavigate();

  if (!user || !isAuthenticated) {
    return (
      <div className="min-h-screen bg-cream-100 py-20 px-4 text-center">
        <div className="max-w-md mx-auto bg-white rounded-3xl p-8 border border-forest-800/15 shadow-card space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-forest-800 text-gold-400 mx-auto flex items-center justify-center shadow-soft">
            <User className="w-7 h-7" />
          </div>
          <h2 className="font-serif font-black text-2xl text-forest-900">Signed Out</h2>
          <p className="text-xs text-charcoal-600 leading-relaxed">
            You are currently signed out. Sign in to view your saved itineraries and bookmarked destinations.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={openAuthModal}
              className="px-6 py-2.5 rounded-xl bg-forest-800 text-cream-50 font-bold text-xs shadow-soft hover:bg-forest-700 transition-colors"
            >
              Sign In / Demo Login
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-2.5 rounded-xl bg-cream-100 border border-charcoal-200 text-charcoal-700 font-bold text-xs hover:bg-cream-200 transition-colors"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleSignOut = () => {
    logout();
    navigate('/');
  };

  // Look up favourite destination objects
  const favoriteDestinations = DESTINATIONS.filter(d => 
    user.favoriteDestinationIds.includes(d.id)
  );

  return (
    <div className="min-h-screen bg-cream-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Profile Card Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-forest-800/15 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="relative group">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-20 h-20 rounded-full object-cover ring-4 ring-gold-400 shadow-md"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-forest-800 text-gold-400 font-serif font-black text-2xl flex items-center justify-center ring-4 ring-gold-400 shadow-md">
                  {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                </div>
              )}
              <button
                onClick={() => setIsAvatarModalOpen(true)}
                className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-white text-forest-800 border border-charcoal-200 shadow-sm hover:bg-forest-50 transition-colors"
                title={user.avatar ? "Change profile photo" : "Add profile photo"}
              >
                <Camera className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h1 className="font-serif font-black text-2xl text-forest-900">{user.name}</h1>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gold-400 text-forest-950 uppercase tracking-wider">
                  Karnataka Explorer
                </span>
              </div>
              <p className="text-xs text-charcoal-500">{user.email}</p>
              <div className="flex items-center justify-center sm:justify-start gap-3 pt-0.5">
                <span className="text-[11px] text-forest-800 font-semibold">{user.joinedDate}</span>
                <button
                  onClick={() => setIsAvatarModalOpen(true)}
                  className="text-[11px] text-forest-700 hover:text-gold-600 font-medium underline"
                >
                  {user.avatar ? 'Change photo' : '+ Add photo'}
                </button>
                {user.avatar && (
                  <button
                    onClick={() => updateAvatar(undefined)}
                    className="text-[11px] text-red-600 hover:text-red-700 font-medium underline"
                  >
                    Remove photo
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/planner')}
              className="px-4 py-2 rounded-xl bg-forest-800 hover:bg-forest-700 text-cream-50 font-bold text-xs flex items-center gap-2 shadow-soft transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Create New Trip</span>
            </button>
            <button
              onClick={handleSignOut}
              className="px-3 py-2 rounded-xl border border-charcoal-200 hover:bg-red-50 hover:text-red-600 text-charcoal-600 font-bold text-xs flex items-center gap-1.5 transition-colors"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-white p-4 rounded-2xl border border-forest-800/10 shadow-soft">
            <div className="font-serif font-black text-2xl text-forest-900">{user.savedItineraries.length}</div>
            <div className="text-[11px] font-bold text-charcoal-500 uppercase tracking-wider mt-0.5">Saved Itineraries</div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-forest-800/10 shadow-soft">
            <div className="font-serif font-black text-2xl text-forest-900">{user.favoriteDestinationIds.length}</div>
            <div className="text-[11px] font-bold text-charcoal-500 uppercase tracking-wider mt-0.5">Favorites</div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-forest-800/10 shadow-soft">
            <div className="font-serif font-black text-2xl text-forest-900">{user.tripHistory.length}</div>
            <div className="text-[11px] font-bold text-charcoal-500 uppercase tracking-wider mt-0.5">Completed Trips</div>
          </div>
        </div>

        {/* Tabs Bar */}
        <div className="flex border-b border-forest-800/15 gap-4">
          <button
            onClick={() => setActiveTab('itineraries')}
            className={`pb-3 text-xs font-bold border-b-2 flex items-center gap-2 transition-all ${
              activeTab === 'itineraries'
                ? 'border-forest-800 text-forest-900'
                : 'border-transparent text-charcoal-500 hover:text-forest-800'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            <span>Saved Itineraries ({user.savedItineraries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('favorites')}
            className={`pb-3 text-xs font-bold border-b-2 flex items-center gap-2 transition-all ${
              activeTab === 'favorites'
                ? 'border-forest-800 text-forest-900'
                : 'border-transparent text-charcoal-500 hover:text-forest-800'
            }`}
          >
            <Heart className="w-4 h-4" />
            <span>Bookmarked Favorites ({favoriteDestinations.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('history')}
            className={`pb-3 text-xs font-bold border-b-2 flex items-center gap-2 transition-all ${
              activeTab === 'history'
                ? 'border-forest-800 text-forest-900'
                : 'border-transparent text-charcoal-500 hover:text-forest-800'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Trip History ({user.tripHistory.length})</span>
          </button>
        </div>

        {/* Tab 1: Saved Itineraries */}
        {activeTab === 'itineraries' && (
          <div className="space-y-6">
            {user.savedItineraries.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {user.savedItineraries.map((itinerary) => (
                  <div
                    key={itinerary.id}
                    className="bg-white rounded-3xl p-6 border border-forest-800/15 shadow-soft space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-charcoal-400">
                        <span className="font-semibold text-forest-800">{itinerary.days.length} Days Circuit</span>
                        <span>Saved: {itinerary.createdAt}</span>
                      </div>
                      <h3 className="font-serif font-bold text-xl text-forest-900">
                        {itinerary.title}
                      </h3>
                      <p className="text-xs text-charcoal-600 line-clamp-2">
                        {itinerary.tagline}
                      </p>
                      <div className="p-3 rounded-xl bg-cream-50 text-xs font-bold text-forest-900 border border-forest-800/10 flex items-center justify-between">
                        <span>Est. Budget: ₹{itinerary.expenseBreakdown.totalEstimated.toLocaleString('en-IN')}</span>
                        <span className="text-[11px] font-normal text-charcoal-500">{itinerary.input.travelGroup} ({itinerary.input.travellerCount} Pax)</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-forest-800/10 flex items-center justify-between gap-2">
                      <button
                        onClick={() => setViewingItinerary(itinerary)}
                        className="flex-1 py-2 rounded-xl bg-forest-800 hover:bg-forest-700 text-cream-50 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Schedule</span>
                      </button>
                      <button
                        onClick={() => window.print()}
                        className="p-2 rounded-xl border border-charcoal-200 hover:bg-cream-100 text-charcoal-700 transition-colors"
                        title="Print / Save PDF"
                      >
                        <Printer className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteItinerary(itinerary.id)}
                        className="p-2 rounded-xl border border-red-200 hover:bg-red-50 text-red-600 transition-colors"
                        title="Delete Itinerary"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border border-forest-800/10 shadow-soft max-w-md mx-auto space-y-4">
                <Bookmark className="w-10 h-10 text-charcoal-400 mx-auto" />
                <h4 className="font-serif font-bold text-lg text-forest-900">No Saved Itineraries Yet</h4>
                <p className="text-xs text-charcoal-500 leading-relaxed">
                  Generate a personalized trip plan using the AI Planner and save it to review anytime.
                </p>
                <button
                  onClick={() => navigate('/planner')}
                  className="px-6 py-2.5 rounded-xl bg-forest-800 text-cream-50 font-bold text-xs"
                >
                  Plan a Trip Now →
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Favorites */}
        {activeTab === 'favorites' && (
          <div className="space-y-6">
            {favoriteDestinations.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteDestinations.map((dest) => (
                  <DestinationCard
                    key={dest.id}
                    destination={dest}
                    onViewDetails={(d) => setSelectedDestination(d)}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border border-forest-800/10 shadow-soft max-w-md mx-auto space-y-4">
                <Heart className="w-10 h-10 text-charcoal-400 mx-auto" />
                <h4 className="font-serif font-bold text-lg text-forest-900">No Favourites Added</h4>
                <p className="text-xs text-charcoal-500 leading-relaxed">
                  Click the heart icon on any destination card to bookmark it to your profile.
                </p>
                <button
                  onClick={() => navigate('/explore')}
                  className="px-6 py-2.5 rounded-xl bg-forest-800 text-cream-50 font-bold text-xs"
                >
                  Browse Destinations →
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Trip History */}
        {activeTab === 'history' && (
          <div className="space-y-4 max-w-2xl mx-auto">
            {user.tripHistory.map((trip, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-forest-800/10 shadow-soft flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-base text-forest-900 capitalize">{trip.destinationId}</h4>
                  <div className="text-xs text-charcoal-500">{trip.visitDate}</div>
                  {trip.notes && <p className="text-xs text-charcoal-700 italic mt-1">"{trip.notes}"</p>}
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Completed
                </span>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Destination Modal */}
      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
      />

      {/* View Itinerary Modal */}
      {viewingItinerary && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative bg-white w-full max-w-4xl rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <h3 className="font-serif font-bold text-2xl text-forest-900">{viewingItinerary.title}</h3>
                <p className="text-xs text-charcoal-500">{viewingItinerary.tagline}</p>
              </div>
              <button
                onClick={() => setViewingItinerary(null)}
                className="p-2 rounded-full hover:bg-cream-100 text-charcoal-600"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              {viewingItinerary.days.map((day) => (
                <div key={day.dayNumber} className="p-4 rounded-2xl bg-cream-50 border border-forest-800/10 space-y-2">
                  <div className="font-serif font-bold text-base text-forest-950">
                    Day {day.dayNumber}: {day.theme}
                  </div>
                  <div className="text-xs text-charcoal-700">
                    <strong>Morning:</strong> {day.morning.title} ({day.morning.time})
                  </div>
                  <div className="text-xs text-charcoal-700">
                    <strong>Afternoon:</strong> {day.afternoon.title} ({day.afternoon.time})
                  </div>
                  <div className="text-xs text-charcoal-700">
                    <strong>Evening:</strong> {day.evening.title} ({day.evening.time})
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setViewingItinerary(null)}
              className="w-full py-2.5 rounded-xl bg-forest-800 text-white font-bold text-xs"
            >
              Close Itinerary Preview
            </button>
          </div>
        </div>
      )}

      {/* Avatar Photo Modal */}
      {isAvatarModalOpen && (
        <div className="fixed inset-0 z-50 bg-charcoal-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative bg-white w-full max-w-sm rounded-3xl p-6 shadow-elevated border border-forest-800/15 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h4 className="font-serif font-bold text-base text-forest-900">Custom Profile Photo</h4>
              <button
                onClick={() => setIsAvatarModalOpen(false)}
                className="p-1 rounded-full text-charcoal-400 hover:text-charcoal-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-charcoal-500">
              Paste an image URL if you wish to display a photo, or leave it blank to display your clean initial badge.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateAvatar(newAvatarUrl);
                setIsAvatarModalOpen(false);
                setNewAvatarUrl('');
              }}
              className="space-y-3"
            >
              <div>
                <label className="block text-xs font-bold text-charcoal-700 mb-1">Photo Image Link</label>
                <input
                  type="url"
                  value={newAvatarUrl}
                  onChange={(e) => setNewAvatarUrl(e.target.value)}
                  placeholder="https://example.com/my-photo.jpg"
                  className="w-full px-3 py-2 rounded-xl border border-charcoal-200 text-xs bg-cream-50 text-charcoal-900 focus:outline-none focus:border-forest-800"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-xl bg-forest-800 text-cream-50 font-bold text-xs hover:bg-forest-700 transition-colors"
                >
                  Save Photo
                </button>
                {user.avatar && (
                  <button
                    type="button"
                    onClick={() => {
                      updateAvatar(undefined);
                      setIsAvatarModalOpen(false);
                    }}
                    className="px-3 py-2 rounded-xl border border-red-200 text-red-600 font-bold text-xs hover:bg-red-50 transition-colors"
                  >
                    Remove Photo
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};


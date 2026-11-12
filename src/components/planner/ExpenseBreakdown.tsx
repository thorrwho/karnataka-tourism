import React from 'react';
import { ExpenseBreakdown as ExpenseBreakdownType } from '../../types/itinerary';
import { IndianRupee, PieChart, Bed, Utensils, Car, Compass, AlertCircle } from 'lucide-react';

interface ExpenseBreakdownProps {
  breakdown: ExpenseBreakdownType;
  travellerCount: number;
  durationDays: number;
}

export const ExpenseBreakdown: React.FC<ExpenseBreakdownProps> = ({ 
  breakdown, 
  travellerCount, 
  durationDays 
}) => {
  const items = [
    { label: 'Stays & Accommodation', amount: breakdown.accommodation, percentage: 38, icon: Bed, color: 'bg-emerald-600' },
    { label: 'Food, Dining & Cafes', amount: breakdown.foodAndDining, percentage: 28, icon: Utensils, color: 'bg-amber-500' },
    { label: 'Transportation & Fuel', amount: breakdown.transportation, percentage: 20, icon: Car, color: 'bg-blue-600' },
    { label: 'Sightseeing & Safari Tickets', amount: breakdown.sightseeingAndActivities, percentage: 10, icon: Compass, color: 'bg-purple-600' },
    { label: 'Souvenirs & Buffer', amount: breakdown.miscellaneous, percentage: 4, icon: AlertCircle, color: 'bg-charcoal-500' }
  ];

  return (
    <div className="bg-white rounded-3xl border border-forest-800/15 p-6 sm:p-8 shadow-soft">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-forest-800/10">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-forest-700 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
            Transparent Estimates
          </span>
          <h3 className="font-serif font-black text-2xl text-forest-900 mt-2">
            Trip Budget & Expense Breakdown
          </h3>
          <p className="text-xs text-charcoal-500">
            Calculated for {travellerCount} {travellerCount === 1 ? 'traveller' : 'travellers'} across {durationDays} days.
          </p>
        </div>

        {/* Total Cost Display */}
        <div className="bg-forest-900 text-cream-50 p-4 rounded-2xl border border-forest-800 self-start sm:self-auto text-right">
          <div className="text-[11px] uppercase tracking-wider text-gold-400 font-bold">Total Estimated Cost</div>
          <div className="text-2xl font-black text-white flex items-center justify-end gap-1 font-serif">
            <IndianRupee className="w-5 h-5 text-gold-400" />
            <span>₹{breakdown.totalEstimated.toLocaleString('en-IN')}</span>
          </div>
          <div className="text-[11px] text-cream-300">
            (~₹{Math.round(breakdown.perPersonEstimated).toLocaleString('en-IN')} per person)
          </div>
        </div>
      </div>

      {/* Stacked Progress Bar */}
      <div className="py-6">
        <div className="h-4 w-full rounded-full overflow-hidden flex bg-cream-200">
          {items.map((item, idx) => (
            <div
              key={idx}
              style={{ width: `${item.percentage}%` }}
              className={`${item.color} transition-all duration-500`}
              title={`${item.label}: ${item.percentage}%`}
            />
          ))}
        </div>
      </div>

      {/* Detailed Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="p-3.5 rounded-2xl bg-cream-50/70 border border-forest-800/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-xl ${item.color} text-white flex items-center justify-center`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-charcoal-900">{item.label}</div>
                  <div className="text-[10px] text-charcoal-500">{item.percentage}% of total</div>
                </div>
              </div>
              <div className="text-xs font-bold text-forest-900">
                ₹{item.amount.toLocaleString('en-IN')}
              </div>
            </div>
          );
        })}
      </div>

      {/* Advisory Note */}
      <div className="mt-6 p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
        <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <span className="leading-relaxed">
          <strong>Cost Advisory:</strong> Expense figures represent realistic estimates based on prevailing fuel costs, average dining bills, and standard entry tickets in Karnataka. Hotel rates fluctuate dynamically during festival peaks (such as Mysuru Dasara and year-end holidays).
        </span>
      </div>

    </div>
  );
};


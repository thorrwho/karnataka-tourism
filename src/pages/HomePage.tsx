import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { StatsSection } from '../components/home/StatsSection';
import { FeaturedDestinations } from '../components/home/FeaturedDestinations';
import { CategoryGrid } from '../components/home/CategoryGrid';
import { PlannerTeaser } from '../components/home/PlannerTeaser';
import { ExperiencesSection } from '../components/home/ExperiencesSection';
import { HiddenGemsBanner } from '../components/home/HiddenGemsBanner';
import { Testimonials } from '../components/home/Testimonials';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      <HeroSection />
      <StatsSection />
      <FeaturedDestinations />
      <CategoryGrid />
      <PlannerTeaser />
      <ExperiencesSection />
      <HiddenGemsBanner />
      <Testimonials />
    </div>
  );
};


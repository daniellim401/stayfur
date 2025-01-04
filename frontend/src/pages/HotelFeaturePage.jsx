import React from 'react';
import { Camera, Dog, WavesLadder, Scissors, Bath, Heart, Sun, Siren } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
    <div className="flex items-center gap-3">
      <div className="p-2 bg-orange-50 rounded-full">
        <Icon className="w-6 h-6 text-[#B06B48]" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  </div>
);

const HotelFeaturePage = () => {
  const features = [
    {
      icon: Camera,
      title: '24/7 CCTV Surveillance',
      description: 'Round-the-clock monitoring for safety'
    },
    {
      icon: Dog,
      title: 'Daily Pet Walks',
      description: 'Regular exercise and outdoor activities'
    },
    {
      icon: WavesLadder,
      title: 'Pet Pool Access',
      description: 'Supervised swimming sessions'
    },
    {
      icon: Scissors,
      title: 'Grooming Services',
      description: 'Professional pet grooming available'
    },
    {
      icon: Bath,
      title: 'Bathing Services',
      description: 'Regular cleaning and maintenance'
    },
    {
      icon: Heart,
      title: 'Personal Care',
      description: 'Individual attention and care'
    },
    {
      icon: Sun,
      title: 'Daytime Activities',
      description: 'Engaging playtime and socialization'
    },
    {
      icon: Siren,
      title: 'Emergency Care',
      description: 'Quick access to veterinary services'
    }
  ];

  return (
    <div className="mt-8 bg-gray-50 p-8 rounded-xl">
      <div className="mb-8">
        <h3 className="text-3xl font-bold text-gray-900">Features & Facilities</h3>
        <p className="text-sm text-gray-500 mt-2">Additional charges may apply for premium services</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HotelFeaturePage;
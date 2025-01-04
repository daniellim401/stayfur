import React from 'react';
import { Star, ChevronRight, MapPin, Clock, Phone, Mail } from 'lucide-react';

const HotelAdditionalSections = () => {
  // Sample review data
  const reviews = [
    {
      id: 1,
      name: "Ivan Lim",
      rating: 5,
      date: "December 2024",
      comment: "Amazing care for my golden retriever! The staff was attentive and sent regular updates with photos. The facilities are clean and spacious.",
      petType: "Golden Retriever"
    },
    {
      id: 2,
      name: "Mike Lau",
      rating: 5,
      date: "January 2025",
      comment: "Second time using Pet Haven and they never disappoint. My dog came back happy and well-groomed. The daily activities kept him entertained.",
      petType: "Labrador"
    },
    {
      id: 3,
      name: "Lisa Wong",
      rating: 4,
      date: "January 2025",
      comment: "Very professional service. The staff is knowledgeable and caring. Would definitely recommend to other pet owners.",
      petType: "Poodle"
    }
  ];

  return (
    <div className="space-y-12 mt-12">
      {/* Description & About Section */}
      <div className="bg-white rounded-xl p-8 shadow-sm">
        <h3 className="text-2xl font-bold mb-6">About Pet Haven</h3>
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed">
            Welcome to Pet Haven, your pet's home away from home. Established in 2018, we've been providing top-tier pet care services in Kajang. Our facility spans over 5,000 square feet, featuring both indoor and outdoor play areas designed specifically for your furry friends' comfort and enjoyment.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Operating Hours</h4>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span>Monday - Sunday: 8:00 AM - 8:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>+60 12-345 6789</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>contact@pethaven.com</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Location</h4>
              <div className="flex items-start gap-2 text-gray-600">
                <MapPin className="w-4 h-4 mt-1" />
                <span>66 Jalan Kenari Taman Kenari 43000 Kajang, Selangor, Malaysia</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="rounded-xl overflow-hidden shadow-sm h-[400px] bg-gray-100">
        <img 
          src="/api/placeholder/800/400" 
          alt="Map location" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Reviews Section */}
      <div className="bg-white rounded-xl p-8 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Customer Reviews</h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 font-semibold">4.8</span>
            </div>
            <span className="text-gray-500">(4 reviews)</span>
          </div>
        </div>

        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-100 last:border-none pb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-sm text-gray-500">Pet: {review.petType}</p>
                </div>
                <div className="text-sm text-gray-500">{review.date}</div>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>

        <button className="flex items-center justify-center w-full mt-6 py-2 text-blue-600 hover:text-blue-700 transition-colors">
          <span>See all reviews</span>
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default HotelAdditionalSections;
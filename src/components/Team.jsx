import React from "react";

const TeamPage = () => {
  const teamMembers = [
    { name: "Daniel", image: "" },
    { name: "Wen Kai", image: "" },
    { name: "Hui Qi", image: "" },
    { name: "Shanelle", image: "" },
    { name: "Sue", image: "" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Text Area*/}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Who we are</h1>
        <p className="text-lg text-gray-700">
          At StayFur, we understand that your pets are more than just animals —
          they’re family. We make booking your pet’s stay as easy as booking your own
          vacation, with trusted caregivers who treat them like family.
        </p>
      </div>

      {/* Team Membrer Area*/}
      <div className="grid grid-cols-3 gap-6 md:grid-cols-5 items-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center">
              {/* Image put here <img src={member.image} alt={member.name} className="rounded-full w-full h-full object-cover" /> */}
            </div>
            <p className="mt-4 text-lg font-semibold">{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
import React from 'react';
import { SectionHeading } from './UI';

const team = [
  { name: "Technician One", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop" },
  { name: "Technician Two", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" },
  { name: "Technician Three", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop" }
];

export const Team: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <span className="bg-[#06b6d4] text-white px-3 py-1 text-[12px] font-heading font-bold rounded mb-4 inline-block tracking-wide shadow-sm">Our Team</span>
        <SectionHeading 
          title={<span>Meet The <span className="text-[#06b6d4]">ProActive Team</span><br/>Behind Your Pool Care</span>} 
          center 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {team.map((member, idx) => (
            <div key={idx} className="group cursor-default">
              <div className="bg-white border-2 border-slate-200 p-4 pb-0 rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="overflow-hidden rounded-sm mb-6 h-72 relative">
                   <img src={member.image} alt={member.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" />
                </div>
                <div className="border-t border-slate-100 py-4">
                   <h3 className="font-heading font-bold text-xl text-slate-900 tracking-wide">{member.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
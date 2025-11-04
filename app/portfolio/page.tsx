'use client';

import PageLayout from '../components/PageLayout';
import { useState } from 'react';

const projects = [
  { id: 1, name: 'Nagarik App', category: 'application', color: 'bg-white' },
  { id: 2, name: 'Ambition Guru', category: 'application', color: 'bg-black' },
  { id: 3, name: 'Sociair', category: 'application', color: 'bg-white' },
  { id: 4, name: 'Tokma', category: 'application', color: 'bg-white' },
  { id: 5, name: 'Saara', category: 'application', color: 'bg-pink-600' },
  { id: 6, name: 'Ifood', category: 'application', color: 'bg-red-600' },
  { id: 7, name: 'MeroDate', category: 'application', color: 'bg-white' },
  { id: 8, name: 'Weather App', category: 'application', color: 'bg-black' },
  { id: 9, name: 'Music App', category: 'application', color: 'bg-black' },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'applications', 'web-development', 'ui-ux'];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter.replace('-', ''));

  return (
    <PageLayout>
      <section className="bg-[#1e1e1f] rounded-2xl p-8 border border-[#2a2a2a]">
        <h2 className="text-3xl font-bold mb-8">
          Portfolio
          <span className="block w-12 h-1 bg-[#ffd700] mt-2"></span>
        </h2>

        <div className="flex flex-wrap gap-3 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={'px-4 py-2 rounded-lg capitalize transition-colors ' + (
                activeFilter === filter
                  ? 'text-[#ffd700]'
                  : 'text-gray-400 hover:text-white'
              )}
            >
              {filter.replace('-', ' ')}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden border border-[#3a3a3a] hover:border-[#ffd700] transition-all cursor-pointer"
            >
              <div className={'aspect-video flex items-center justify-center text-2xl font-bold ' + project.color}>
                {project.name}
              </div>
              <div className="bg-[#2a2a2a] p-4">
                <h3 className="font-semibold mb-1">{project.name}</h3>
                <p className="text-sm text-gray-400 capitalize">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}

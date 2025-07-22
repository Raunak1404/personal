import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { poems } from '../data/poems'; // Assuming you have a data file for poems

interface HobbiesProps {}

const Hobbies: React.FC<HobbiesProps> = () => {
  const [selectedPoem, setSelectedPoem] = useState<number | null>(0);

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Coming Soon!</h1>
        <p className="text-lg text-gray-300">Holds Up!!!!..... Under Development</p>
      </div>
    </div>
  );
};

export default Hobbies;
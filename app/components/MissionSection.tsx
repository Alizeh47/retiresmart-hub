'use client';

import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

const MissionSection = () => {
  return (
    <section className="w-full bg-[#FFF5F5] py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        {/* Virtual Office Section */}
        <div className="text-center flex flex-col items-center">
          <h2 className="text-lg mb-4">Virtual Office</h2>
          <div className="relative w-64 h-48 mb-6">
            {/* Replace with your actual desk illustration */}
            <div className="w-full h-full bg-[#FEFBE8] rounded-lg relative">
              <div className="absolute bottom-0 w-full h-24 bg-[#E8E8E8] border-t-2 border-gray-300"></div>
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white text-xl font-bold">
                P
              </div>
            </div>
          </div>
          <h3 className={`${playfair.className} text-4xl font-bold mb-4 max-w-md`}>
            At your fingertips, anytime, anywhere.
          </h3>
          <p className={`${inter.className} text-gray-700 mb-6 max-w-md`}>
            Wherever the road takes you, we're right by your side. Think of us as retirement GPS without the annoying robot voice.
          </p>
          <button className="bg-[#4FD1C5] text-white px-6 py-2 rounded-full hover:bg-[#3BB3A7] transition-colors">
            Visit The Office
          </button>
        </div>

        {/* Our Mission Section */}
        <div className="text-center flex flex-col items-center">
          <h2 className="text-lg mb-4">Our Mission</h2>
          <div className="relative w-64 h-48 mb-6">
            {/* Replace with your actual P illustration */}
            <div className="w-full h-full bg-[#FEFBE8] rounded-lg flex items-center justify-center">
              <span className="text-8xl font-bold text-gray-800">P</span>
            </div>
          </div>
          <h3 className={`${playfair.className} text-4xl font-bold mb-4 max-w-md`}>
            Here to help you make sense of it all.
          </h3>
          <p className={`${inter.className} text-gray-700 mb-6 max-w-md`}>
            Don't just retire. Retire with a purpose. Our Mission is to make your retirement better, plain and simple. We're real people with families and goals, just like you. So we understand how personal retirement is. We'll be with you every step of the way, making sure you're always on the right path.
          </p>
          <button className="bg-[#4FD1C5] text-white px-6 py-2 rounded-full hover:bg-[#3BB3A7] transition-colors">
            Meet The Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default MissionSection; 
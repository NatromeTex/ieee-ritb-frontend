import React from 'react';

interface TopBarProps {
  buttons: string[];
  logoSrc: string;
  altText?: string;
}

const TopBar: React.FC<TopBarProps> = ({ buttons, logoSrc, altText = "Logo" }) => {
  return (
    <div className="h-[75px] bg-[#DADAFF] rounded-lg flex items-center px-6">
      <div className="text-[#303075] justify-start text-lg font-bold">
        <img src={logoSrc} alt={altText} className="h-full object-contain" />
      </div>
      <div className='flex-grow' />
      <div className="flex space-x-4">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="text-[#303075] font-medium py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out"
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopBar;

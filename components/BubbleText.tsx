import { useState } from 'react';

const BubbleText = ({ content }:{ content: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    setIsHovered(false);
  };

  return (
    <div>
        <h2 className="text-left text-5xl font-thin text-black">
        {content.split("").map((child, idx) => (
            <span
            key={idx}
            className={`transition duration-800 ${isHovered ? 'font-bold text-[#00305a]' : 'font-thin text-[#00305a]'}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
            >
            {child}
            </span>
        ))}
        </h2>       
    </div>
  );
};

export default BubbleText;
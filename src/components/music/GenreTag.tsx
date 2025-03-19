
import React from "react";

interface GenreTagProps {
  label: string;
}

export const GenreTag: React.FC<GenreTagProps> = ({ label }) => {
  return (
    <div className="backdrop-blur text-white text-[10px] whitespace-nowrap bg-[#222325] bg-opacity-80 px-2 py-0.5 rounded-full">
      {label}
    </div>
  );
};

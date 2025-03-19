
import React from "react";

export const ProfileButton: React.FC = () => {
  return (
    <div className="absolute right-6 top-6">
      <div className="w-9 h-9 rounded-full overflow-hidden border border-[#333333]">
        <img 
          src="public/lovable-uploads/4e778120-a1c0-4133-a4d8-7de5f05f4f60.png" 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

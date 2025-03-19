
import React from "react";
import { GenreTag } from "./GenreTag";

interface ArtistCardProps {
  image: string;
  name: string;
  description: string;
  genres?: string[];
  featured?: boolean;
  hasPlayButton?: boolean;
  hasSubscribeButton?: boolean;
  additionalText?: string;
}

export const ArtistCard: React.FC<ArtistCardProps> = ({
  image,
  name,
  description,
  genres = [],
  featured = false,
  hasPlayButton = false,
  hasSubscribeButton = false,
  additionalText,
}) => {
  return (
    <div className={`w-full overflow-hidden ${featured ? "bg-[#1A1A1C] rounded-xl" : ""}`}>
      <div className="relative">
        <img
          src={image}
          alt={`${name} artist image`}
          className="w-full aspect-square object-cover rounded-xl"
        />
        {hasPlayButton && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black bg-opacity-20 rounded-full p-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 31 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L29.2484 19.6938L1 38.3877V1Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        )}
      </div>

      <div className="mt-3">
        <div className="text-white text-base font-semibold">{name}</div>
        <div className="text-[#868687] text-xs mt-1 mb-2">
          {description}
        </div>
        {additionalText && (
          <div className="text-[#868687] text-xs mt-1">
            {additionalText}
          </div>
        )}
      </div>

      {genres.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {genres.map((genre, index) => (
            <GenreTag key={index} label={genre} />
          ))}
        </div>
      )}

      {hasSubscribeButton && (
        <div className="text-white text-xs text-center font-medium bg-[#6B4DEC] mt-4 p-2 rounded-full cursor-pointer hover:bg-[#5a41c7] transition-colors">
          SUBSCRIBE TO GENERATE
        </div>
      )}
    </div>
  );
};

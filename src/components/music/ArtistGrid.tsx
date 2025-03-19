
import React from "react";
import { ArtistCard } from "./ArtistCard";

// Sample artist data
const artistsData = [
  {
    id: 1,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/deb607e2ca0dd0336421bf83efc22d88a3e157aa",
    name: "ASH POURNOURI",
    description:
      "Music entrepreneur shaping EDM, pop, and artist careers.",
    genres: ["EDM", "House", "Dance Pop"],
    additionalText: "Contains styles of Avicii, Coldplay, Skrillex, Imagine Dragons + 48 more"
  },
  {
    id: 2,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a812e4b25a5173a8172cf163ec7a95ff17a14666",
    name: "AVICII",
    description: "Iconic DJ blending melodic house with deep emotions",
    genres: [],
    featured: true,
    hasPlayButton: true,
    hasSubscribeButton: true,
  },
  {
    id: 3,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6d231eb82e60286a918ccca49600de94e67592d2",
    name: "COLDPLAY",
    description: "Legendary rock band known for atmospheric anthems",
    genres: ["Pop Rock", "Alt Rock", "Atmospheric Rock"],
  },
  {
    id: 4,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/421549ba333b23417380ba5c4c40ab4dac2e0e86",
    name: "IMAGINE DRAGONS",
    description: "Energetic rock band mixing alt-rock with electronics",
    genres: ["Alt Rock", "Electronic", "Anthemic Sound"],
  },
  {
    id: 5,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fc0b655a19d9d4c6dc6be9628156944d095a101e",
    name: "SWEDISH HOUSE MAFIA",
    description:
      "EDM supergroup known for anthemic festival hits and progressive house.",
    genres: ["EDM", "House", "Festival Anthems"],
  },
  {
    id: 6,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/66c8345c96f8cb347b4311c370a6b46155daa3ab",
    name: "THE WEEKND",
    description:
      "Global icon blending R&B, pop, and dark synth-driven sounds.",
    genres: ["Alt-R&B", "Synthpop", "Darkwave"],
  },
  {
    id: 7,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4f1156084799edda6d85bba479836355fb47c3e9",
    name: "MEMBA",
    description:
      "Genre-bending duo crafting tribal rhythms, bass, and cinematic electronic beats.",
    genres: ["EDM", "Tribal", "Experimental Bass"],
  },
  {
    id: 8,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fdde11e87a9399f5120534df410f2d8e5fe4e6ae",
    name: "GALANTIS",
    description: "Duo fusing pop melodies with uplifting electronic beats.",
    genres: ["Uplifting", "Pop EDM", "Future Bass"],
  },
  {
    id: 9,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/391b4e40e7d1699e4259828429d81f9a0ee0c116",
    name: "Zara Larsson",
    description:
      "Pop powerhouse delivering chart-topping hits with electronic flair.",
    genres: ["Pop", "Dance", "Electropop"],
  },
  {
    id: 10,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7da9077d9a2f3d08f866de28cb20aaba769a4a94",
    name: "Skrillex",
    description:
      "Pioneer of modern bass music, blending dubstep, EDM, and genre-defying sounds",
    genres: ["Dubstep", "Bass Music", "Electronic Fusion"],
  },
];

export const ArtistGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-5 gap-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
      {artistsData.map((artist) => (
        <ArtistCard
          key={artist.id}
          image={artist.image}
          name={artist.name}
          description={artist.description}
          genres={artist.genres}
          featured={artist.featured}
          hasPlayButton={artist.hasPlayButton}
          hasSubscribeButton={artist.hasSubscribeButton}
          additionalText={artist.additionalText}
        />
      ))}
    </div>
  );
};

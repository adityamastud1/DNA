
import React from "react";
import { Sidebar } from "@/components/music/Sidebar";
import { MusicHeader } from "@/components/music/MusicHeader";
import { ArtistGrid } from "@/components/music/ArtistGrid";
import { ProfileButton } from "@/components/music/ProfileButton";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0E0E0F] flex">
      <Sidebar />
      <div className="flex-1 pl-[84px] max-sm:pl-0">
        <ProfileButton />
        <div className="py-8 px-10 max-sm:px-5">
          <MusicHeader />
          <ArtistGrid />
        </div>
      </div>
    </div>
  );
};

export default Index;

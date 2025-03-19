
import React from "react";

export const Sidebar: React.FC = () => {
  return (
    <div className="fixed w-[70px] h-full bg-black left-0 top-0 z-50 max-sm:hidden">
      <div className="h-full flex flex-col items-center py-4">
        {/* Logo */}
        <div className="mb-8">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#6B4DEC" />
          </svg>
        </div>

        {/* Add button */}
        <div className="mb-6">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <circle cx="12" cy="12" r="11.5" stroke="currentColor" />
            <path
              d="M12 7V17M17 12H7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Home icon */}
        <div className="mb-6">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.135 18.773v-3.057c0-.78.637-1.414 1.423-1.414h2.875c.377 0 .74.15 1.006.414.267.265.417.625.417 1v3.057c-.002.325.126.637.356.867.23.23.544.36.87.36h1.962a3.46 3.46 0 0 0 2.443-1 3.41 3.41 0 0 0 1.013-2.422V7.867c0-.735-.328-1.431-.895-1.902L11.934.675a3.097 3.097 0 0 0-3.923.152L1.467 5.965A2.474 2.474 0 0 0 .5 7.867v8.702C.5 18.464 2.047 20 3.956 20h1.916c.68 0 1.231-.544 1.236-1.218l.027-.009z"
              fill="white"
            />
          </svg>
        </div>

        {/* Search icon */}
        <div className="mb-6">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.167 15.833a6.667 6.667 0 1 0 0-13.333 6.667 6.667 0 0 0 0 13.333zM17.5 17.5l-3.625-3.625"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Library icon */}
        <div className="mb-6">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 17.5h2.083V2.5H2.5v15zM0 17.5h1.667V2.5H0v15zM5.833 17.5H7.5V2.5H5.833v15zM17.26 3.015l-6.927 13.925 1.667 0.56 6.927-13.925-1.667-0.56z"
              fill="white"
            />
          </svg>
        </div>

        {/* DNA button - at the bottom */}
        <div className="mt-auto mb-8">
          <div className="w-[40px] h-[40px] bg-[#1C1E1F] rounded-md flex items-center justify-center">
            <span className="text-white text-xs font-medium">DNA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

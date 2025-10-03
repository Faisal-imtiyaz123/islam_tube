import tw from "tailwind-styled-components";

// Accepts a `collapsed` boolean prop for conditional styles
export const LeftSideBarStyledDiv = tw.div<{ $isOpen: boolean }>`
  flex 
  flex-col 
  gap-6
  h-screen 
  bg-gray-900 
  text-gray-200 
  p-4 
  shadow-lg 
  ${(p) => (p.$isOpen ? "w-60" : "w-20")}
`;

export const SideBarItemStyled = tw.div<{ $isOpen: boolean }>`
  flex 
  ${(p) => (p.$isOpen ? "flex-row" : "flex-col")}
  items-center 
  px-3 
  py-2 
  rounded-xl 
  cursor-pointer 
  hover:bg-gray-800 
  hover:text-white 
  transition-colors 
  duration-200
   ${(p) => (p.$isOpen ? "gap-10" : "gap-2")}
`;

export const SideBarItemIconWrapper = tw.div`

`;

export const SideBarItemText = tw.span<{ $isOpen: boolean }>`
  whitespace-nowrap
  ${(p) => (p.$isOpen ? "text-base" : "text-xs")}
`;

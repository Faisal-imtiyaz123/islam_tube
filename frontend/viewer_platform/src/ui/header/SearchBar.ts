import tw from "tailwind-styled-components";

export const SearchBarWrapper = tw.div`
  flex items-center gap-2 
  w-full max-w-md 
  px-3 py-2 
  rounded-2xl 
  bg-gray-100 shadow-sm 
  focus-within:ring-2 focus-within:ring-primary
`;

export const SearchInput = tw.input`
  w-full 
  bg-transparent 
  outline-none 
  text-gray-700 
  placeholder-gray-400
`;

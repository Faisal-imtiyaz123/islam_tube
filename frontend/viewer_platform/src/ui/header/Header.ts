import tw from "tailwind-styled-components";

export const HeaderWrapper = tw.header`
  flex items-center justify-between
  w-full px-6 py-3
  bg-white shadow-md
`;

export const LeftSection = tw.div`
  flex items-center gap-6
`;

export const RightSection = tw.div`
  flex items-center gap-4
`;

"use client";

import { leftSideBarStateAtom } from "@/lib/state/sidebar/LeftSideBarState";
import { useAtom } from "jotai";

export const useLeftSideBarState = () => {
  const [isLeftSideBarOpen, setIsLeftSideBarOpen] = useAtom(leftSideBarStateAtom);

  const toggleLeftSideBar = () => {
    setIsLeftSideBarOpen((prev) => !prev);
  };

  return { isLeftSideBarOpen, toggleLeftSideBar };
};

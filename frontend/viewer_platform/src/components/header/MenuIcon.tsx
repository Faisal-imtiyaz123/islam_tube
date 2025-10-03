"use client"
import { useLeftSideBarState } from "@/lib/hooks/sidebar/useLeftSideBarState";
import { Menu } from "lucide-react";

export default function MenuIcon() {
  const {toggleLeftSideBar} = useLeftSideBarState()
  return (
    <>
    <Menu onClick={toggleLeftSideBar}/>
    </>
  )
}

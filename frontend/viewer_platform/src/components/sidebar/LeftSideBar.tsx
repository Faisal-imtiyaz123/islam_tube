"use client"
import { useLeftSideBarState } from "@/lib/hooks/sidebar/useLeftSideBarState";
import { sideBarData } from "@/lib/sidebar/sideBarData";
import {
  LeftSideBarStyledDiv,
  SideBarItemStyled,
  SideBarItemIconWrapper,
  SideBarItemText,
} from "@/ui/sidebar/LeftSideBar";


export default function LeftSideBar() {
  const {isLeftSideBarOpen} = useLeftSideBarState()
  return (
    <LeftSideBarStyledDiv $isOpen={isLeftSideBarOpen}>
      {sideBarData.map((sideBarItem, i) => (
        <SideBarItemStyled key={i} $isOpen={isLeftSideBarOpen}>
          <SideBarItemIconWrapper>{sideBarItem.icon()}</SideBarItemIconWrapper>
           <SideBarItemText $isOpen={isLeftSideBarOpen}>{sideBarItem.iconTitle}</SideBarItemText>
        </SideBarItemStyled>
      ))}
    </LeftSideBarStyledDiv>
  );
}
 
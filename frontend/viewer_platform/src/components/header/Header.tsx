import { HeaderWrapper, LeftSection, RightSection } from "@/ui/header/Header";
import CreateIcon from "./CreateIcon";
import MyAccount from "./MyAccount";
import Notifications from "./Notifications";
import SearchBar from "./SearchBar";
import Title from "./Title";
import MenuIcon from "./MenuIcon";

export default function Header() {
  return (
    <HeaderWrapper>
      <LeftSection>
        <MenuIcon/>
        <Title />
      </LeftSection>
      <SearchBar />
      <RightSection>
        <CreateIcon />
        <Notifications />
        <MyAccount />
      </RightSection>
    </HeaderWrapper>
  );
}

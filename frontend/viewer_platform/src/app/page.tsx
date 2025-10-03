import HomeVideo from "@/components/home/HomeVideo";
import { srcArray } from "@/lib/data/src";
import { HomePageDivStyled, HomePageStyledDivWrapper } from "@/ui/home/HomePage";


export default function HomePage() {
  return (
    <HomePageStyledDivWrapper>
    <HomePageDivStyled>
      {
      srcArray.map((src,i)=><HomeVideo key={i} src={src}/>)
      }
    </HomePageDivStyled>
    </HomePageStyledDivWrapper>
  )
}

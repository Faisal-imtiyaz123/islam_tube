import {ChartNoAxesCombined, History, House, Video} from "lucide-react"
import { JSX } from "react"

interface sideBarDataProps {
    icon:()=>JSX.Element
    iconTitle:string
}
export const sideBarData:sideBarDataProps[] = [
    {
        icon:()=>{ return <House/>},
        iconTitle:"Home"
    },
    {
        icon:()=>{return <Video/>},
        iconTitle:"Latest"
    },
    {
        icon:()=>{return <ChartNoAxesCombined/>},
        iconTitle:"Trending"
    },
    {
        icon:()=>{return <History/>},
        iconTitle:"History"
    },
]
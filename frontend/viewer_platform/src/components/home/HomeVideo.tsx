import ReactPlayer from "react-player";
import tw from "tailwind-styled-components";

interface HomeVideoProps {
  src: string;
}

const VideoWrapper = tw.div`
  w-full max-w-md aspect-video 
  rounded-lg overflow-hidden 
  shadow-lg bg-black
`;

export default function HomeVideo({ src }: HomeVideoProps) {
  return (
    <VideoWrapper>
      <ReactPlayer
        src={src}
        controls
        width="100%"
        height="100%"
        config={{
          youtube: {
            color: "white",
          },
        }}
      />
    </VideoWrapper>
  );
}

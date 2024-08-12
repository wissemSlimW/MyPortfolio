import { profileImg } from "../../Constants/images";

export const Hexagon = ({
  borderColor,
  ...props
}: { borderColor: string } & React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="currentColor"
    viewBox="-12.8 -12.8 281.60 281.60"
    id="Flat"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth="25.6"
    {...props}
  >
    <g
      id="SVGRepo_bgCarrier"
      strokeWidth="0"
      transform="translate(0,0), scale(1)"
    >
      <path
        transform="translate(-12.8, -12.8), scale(17.6)"
        fill="#00000000"
        d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
        strokeWidth="0"
      ></path>
    </g>
    <g id="SVGRepo_iconCarrier">
      <path d="M228,80.668V175.332a16.0255,16.0255,0,0,1-8.12695,13.9292l-84,47.47852a16.08782,16.08782,0,0,1-15.7461,0l-84-47.478A16.02688,16.02688,0,0,1,28,175.332V80.668a16.0255,16.0255,0,0,1,8.127-13.9292l84-47.47852a16.08654,16.08654,0,0,1,15.7461,0l84,47.478A16.02688,16.02688,0,0,1,228,80.668Z"></path>{" "}
    </g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={borderColor}
      strokeWidth="15.503999999999998"
    >
      <path d="M228,80.668V175.332a16.0255,16.0255,0,0,1-8.12695,13.9292l-84,47.47852a16.08782,16.08782,0,0,1-15.7461,0l-84-47.478A16.02688,16.02688,0,0,1,28,175.332V80.668a16.0255,16.0255,0,0,1,8.127-13.9292l84-47.47852a16.08654,16.08654,0,0,1,15.7461,0l84,47.478A16.02688,16.02688,0,0,1,228,80.668Z"></path>{" "}
    </g>{" "}
  </svg>
);

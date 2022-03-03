import Header from "../Header";
import AudioPlayer from "../AudioPlayer";

const tracks = [
  {
    title: "One Night in Neo Kobe",
    artist: "Some Dude",
    audioSrc: "/music/One Night In Neo Kobe City.mp3",
    image: "string",
    color: "string",
  },
  {
    title: "Beware",
    artist: "Death Grips",
    audioSrc: "/music/Beware.mp3",
    image: "string",
    color: "string",
  },
  {
    title: "Culture Shock",
    artist: "Death Grips",
    audioSrc: "/music/CultureShock.mp3",
    image: "string",
    color: "string",
  },
];

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <div className="absolute left-5 bottom-10 md:p-5">
        <AudioPlayer tracks={tracks}/>
      </div>
    </>
  );
};

export default Layout;

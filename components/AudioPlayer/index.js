import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForwardStep,
  faBackwardStep,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import mixtape from "../../public/images/mixtape.png";

const AudioPlayer = ({ tracks }) => {
  // state
  const [trackIndex, setTrackIndex] = useState(0);
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { title, artist, color, image, audioSrc } = tracks[trackIndex];

  const nextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  const previousTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  useEffect(() => {
    const audio = new Audio(audioSrc);
    setAudio(audio);
  }, [audioSrc, setAudio]);

  useEffect(() => {
    if (isPlaying) {
      audio?.play();
      audio.onended = () => {
        nextTrack();
      };
    } else {
      audio?.pause();
    }
  }, [audio, isPlaying]);

  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    return () => {
      audio?.pause();
    };
  }, [audio]);
  return (
    <div className="inline-flex items-center bg-white py-1 rounded-lg">
      <div className="relative top-[-10px] left-[-13px] h-10 w-[85px]">
        <Image src={mixtape} alt={"Guy play stero"} layout={"responsive"} />
      </div>
      <div className="w-[101px]">
        <h3 className="font-bold">
          {title.length > 10 ? `${title.slice(0, 10)}...` : title}
        </h3>
        <p className="text-xs font-light opacity-50">{artist}</p>
      </div>
      <div className="pl-[7px] pr-[18px] py-15">
        <FontAwesomeIcon
          onClick={previousTrack}
          className="cursor-pointer px-4 py-2 text-[30px]"
          icon={faBackwardStep}
        />
        {!isPlaying ? (
          <button className="opacity-100 " onClick={playPause}>
            <FontAwesomeIcon className="px-4 py-2 text-[30px]" icon={faPlay} />
          </button>
        ) : (
          <button className="opacity-100 " onClick={playPause}>
            <FontAwesomeIcon className="px-4 py-2 text-[30px]" icon={faPause} />
          </button>
        )}
        <FontAwesomeIcon
          onClick={nextTrack}
          className="cursor-pointer px-4 py-2 text-[30px]"
          icon={faForwardStep}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;

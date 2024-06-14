"use client";
import React, { useState, useRef, useEffect } from "react";
import { Slider } from "@/components/ui/slider"; // Assuming Slider is a custom component
import { cn } from "@/lib/utils";
import { Play, Pause } from "lucide-react"; // Import both Play and Pause icons

const AudioPlayer = ({
  audioSrc = "https://venturi.gitwork.tech/audio/audio1.mp3",
  title,
  className,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  // No initial value for currentTime, will be set by useEffect
  const [currentTime, setCurrentTime] = useState(null);
  const [disable, setDisable] = useState(false);
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const updateProgress = (event) => {
    const { currentTime, duration } = event.target;
    setCurrentTime(currentTime); // Update currentTime always
  };

  // Update currentTime and max value of slider after audio loads
  useEffect(() => {
    if (audioRef.current) {
      const updateDuration = () => {
        setCurrentTime(audioRef.current.currentTime); // Initial update
        const max = audioRef.current.duration;
        if (max) {
          // Set max only if duration is available
          // (consider adding a loading state for the slider if needed)
          // Update slider max here (assuming your Slider component supports it)
        }
      };
      audioRef.current.addEventListener("loadeddata", updateDuration);
      // Cleanup function to remove event listener on unmount
      // return () =>
      //   audioRef.current.removeEventListener("loadeddata", updateDuration);
    }
  }, [audioRef]); // Runs only when audioRef changes

  return (
    <div
      className={cn(
        "w-full bg-white px-2 py-2 gap-5 flex rounded-lg",
        className
      )}
    >
      <div
        onClick={togglePlay}
        className="before:absolute cursor-pointer size-10 inset-2 relative before:rounded-full before:bg-primary before:size-10 before:-inset-2"
      >
        {isPlaying ? (
          <Pause stroke="white" className="absolute" />
        ) : (
          <Play stroke="white" className="absolute" />
        )}
      </div>
      <div className="flex flex-col items-start gap-3 w-full">
        <p className="font-ArticulateMedium">
          {title ??
            "Dev Stories: The Coding Journey with Ashley Firth | Octopus Energy"}
        </p>

        <Slider
          disabled={!audioSrc} // Enable slider only when audio source is defined
          value={isClicked ? [progress] : [currentTime]}
          max={audioRef?.current?.duration} // Set max based on audio duration (consider adding a default value if needed)
          className="w-full h-1 fill-black "
          onValueChange={(value) => {
            setIsClicked(true);
            setProgress(value[0]);
            // audioRef.current.currentTime = value[0];
          }}
          onValueCommit={(value) => {
            console.log("onValueChangeComplete", value);
            setIsClicked(false);
            audioRef.current.currentTime = value[0];
          }}
          onChange={(value) => {
            audioRef.current.currentTime = value;
          }} // Update audio time on slider change
        />
      </div>
      <audio ref={audioRef} onTimeUpdate={updateProgress}>
        <source src={audioSrc} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default AudioPlayer;

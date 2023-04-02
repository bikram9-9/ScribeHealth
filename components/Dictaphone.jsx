import React, { useState, useEffect } from "react";
import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const appId = "474585cc-d1bb-4d28-a1ec-806458a99de5";
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

const Dictaphone = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const startListening = () => {
    setIsRecording(true);
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    setIsRecording(false);
    SpeechRecognition.stopListening();
  };

  if (!browserSupportsSpeechRecognition && domLoaded) {
    return <div>Browser doesn't support speech recognition.</div>;
  }

  return (
    <>
      {domLoaded && (
        <div className="">
          <div className="flex justify-between">
            <div className="text-[12px] pt-4 md:px-80 text-white ">
              Microphone: {listening ? "on" : "off"}
            </div>
            {isRecording ? (
              <div className="text-[14px] pt-4 md:px-80 text-red-700">
                Recording
              </div>
            ) : null}
          </div>
          <div className="px-2 sm:px-20 md:px-80 text-2xl md:text-4xl my-20 text-white overflow-visible">
            {transcript}
          </div>

          <div className="flex justify-center items-end mt-20">
            <button
              onClick={isRecording ? stopListening : startListening}
              className={` rounded-full ${
                !isRecording ? "bg-gray-200" : "bg-red-700"
              } p-10 drop-shadow-lg text-white font-bold backdrop-blur-sm bg-white/50`}
            >
              {isRecording ? (
                <div>Stop Transcribing </div>
              ) : (
                <div>Start Transcribing</div>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default Dictaphone;

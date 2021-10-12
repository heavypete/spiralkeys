import React from "react";
import * as Tone from "tone";

export default function SevenNote() {
  const synth = Tone.Synth().toDestination();
  function playNote() {
    synth.triggerAttackRelease("C4");
  }
  return (
    <div className="Seven-Note">
      <button className="SevenButton" onClick={() => playNote()}>
        Play
      </button>
    </div>
  );
}

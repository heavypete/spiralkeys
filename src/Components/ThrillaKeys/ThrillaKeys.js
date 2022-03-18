import React, { useState } from "react";
import "../ThrillaKeys/thrillakeys.css";

function createNoteTable() {
  let noteFreq = [];
  for (let i = 0; i < 4; i++) {
    noteFreq[i] = {};
  }
  //! An array of Objects.  4 items.
  noteFreq[0]["A"] = 27.5;
  noteFreq[0]["A#"] = 29.135235094880619;
  noteFreq[0]["B"] = 30.867706328507756;

  noteFreq[1]["C"] = 32.703195662574829;
  noteFreq[1]["C#"] = 34.647828872109012;
  noteFreq[1]["D"] = 36.708095989675945;
  noteFreq[1]["D#"] = 38.890872965260113;
  noteFreq[1]["E"] = 41.203444614108741;
  noteFreq[1]["F"] = 43.653528929125485;
  noteFreq[1]["F#"] = 46.249302838954299;
  noteFreq[1]["G"] = 48.999429497718661;
  noteFreq[1]["G#"] = 51.913087197493142;
  noteFreq[1]["A"] = 55.0;
  noteFreq[1]["A#"] = 58.27;
  noteFreq[1]["B"] = 61.74;
  noteFreq[2]["C"] = 65.41;
  noteFreq[2]["C#"] = 69.3;
  noteFreq[2]["D"] = 73.42;
  noteFreq[2]["D#"] = 77.78;
  noteFreq[2]["E"] = 82.41;
  noteFreq[2]["F"] = 87.31;
  noteFreq[2]["F#"] = 92.5;
  noteFreq[2]["G"] = 98.0;
  noteFreq[2]["G#"] = 103.8;
  noteFreq[2]["A"] = 110.0;
  noteFreq[2]["A#"] = 116.5;
  noteFreq[2]["B"] = 123.5;

  noteFreq[3]["C"] = 130.8;
  return noteFreq;
}

//*component function
export default function ThrillaKeys() {
  const [volume, setVolume] = useState(0);
  const noteFrequencies = createNoteTable();
  const keyboard = [];
  //const [keyboard, setKeyboard] = useState();
  const handleVolume = (e) => {
    setVolume(e.target.value);
  };
  console.log(noteFrequencies);

  function generateKeyboard() {
    //const keyboard = [];
    for (let i = 0; i < noteFrequencies.length; i++) {
      keyboard.push([]);

      // for (let y = 0; y <= keyboard.length; y++)
      //   keyboard[index][key]
    }
  }

  generateKeyboard();

  return (
    <div className="container">
      <h2>Hello </h2>
      <div className="keyboard">{keyboard}</div>
      <div className="settingsBar">
        <div className="left"></div>
        <div className="right"></div>
      </div>
    </div>
  );
}

// console.log(keyboard)

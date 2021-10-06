import React from "react";
import "./App.css";
import * as Tone from "tone";
import SevenNote from "./Components/SevenNote";

export default function App() {
  const synth = new Tone.Synth().toDestination();

  function playNote5(note) {
    synth.triggerAttack(`${note}5`, "8n");
  }

  function playNote4(note) {
    synth.triggerAttack(`${note}4`, "8n");
  }

  function playNote3(note) {
    synth.triggerAttack(`${note}3`, "8n");
  }

  function playNote2(note) {
    synth.triggerAttack(`${note}2`, "8n");
  }

  function stopNote() {
    synth.triggerRelease();
  }
  return (
    <div className="App">
      <div className="title">Welcome to Spiral Keys</div>
      <div className="note-wrapper5">
        <button
          className="noteA"
          onMouseEnter={() => playNote5("A")}
          onMouseLeave={() => stopNote()}
        >
          A
        </button>
        <button
          className="noteG"
          onMouseEnter={() => playNote5("G")}
          onMouseLeave={() => stopNote()}
        >
          G
        </button>
        <button
          className="noteE"
          onMouseEnter={() => playNote5("E")}
          onMouseLeave={() => stopNote()}
        >
          E
        </button>
        <button
          className="noteD"
          onMouseEnter={() => playNote5("D")}
          onMouseLeave={() => stopNote()}
        >
          D
        </button>
        <button
          className="noteC"
          onMouseEnter={() => playNote5("C")}
          onMouseLeave={() => stopNote()}
        >
          C
        </button>
      </div>

      <div className="note-wrapper4">
        <button
          className="noteC"
          onMouseEnter={() => playNote4("C")}
          onMouseLeave={() => stopNote()}
        >
          C
        </button>
        <button
          className="noteD"
          onMouseEnter={() => playNote4("D")}
          onMouseLeave={() => stopNote()}
        >
          D
        </button>
        <button
          className="noteE"
          onMouseEnter={() => playNote4("E")}
          onMouseLeave={() => stopNote()}
        >
          E
        </button>
        <button
          className="noteG"
          onMouseEnter={() => playNote4("G")}
          onMouseLeave={() => stopNote()}
        >
          G
        </button>
        <button
          className="noteA"
          onMouseEnter={() => playNote4("A")}
          onMouseLeave={() => stopNote()}
        >
          A
        </button>
      </div>

      <div className="note-wrapper3">
        <button
          className="noteA"
          onMouseEnter={() => playNote3("A")}
          onMouseLeave={() => stopNote()}
        >
          A
        </button>
        <button
          className="noteG"
          onMouseEnter={() => playNote3("G")}
          onMouseLeave={() => stopNote()}
        >
          G
        </button>
        <button
          className="noteE"
          onMouseEnter={() => playNote3("E")}
          onMouseLeave={() => stopNote()}
        >
          E
        </button>
        <button
          className="noteD"
          onMouseEnter={() => playNote3("D")}
          onMouseLeave={() => stopNote()}
        >
          D
        </button>
        <button
          className="noteC"
          onMouseEnter={() => playNote3("C")}
          onMouseLeave={() => stopNote()}
        >
          C
        </button>
      </div>

      <div className="note-wrapper2">
        <button
          className="noteC"
          onMouseEnter={() => playNote2("C")}
          onMouseLeave={() => stopNote()}
        >
          C
        </button>
        <button
          className="noteD"
          onMouseEnter={() => playNote2("D")}
          onMouseLeave={() => stopNote()}
        >
          D
        </button>
        <button
          className="noteE"
          onMouseEnter={() => playNote2("E")}
          onMouseLeave={() => stopNote()}
        >
          E
        </button>
        <button
          className="noteG"
          onMouseEnter={() => playNote2("G")}
          onMouseLeave={() => stopNote()}
        >
          G
        </button>
        <button
          className="noteA"
          onMouseEnter={() => playNote2("A")}
          onMouseLeave={() => stopNote()}
        >
          A
        </button>
      </div>
      {/* <div>
        <SevenNote />
      </div> */}
    </div>
  );
}

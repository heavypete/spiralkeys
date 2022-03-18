import React, { useState } from "react";
import "../Sequencer/sequencer.css";
import * as Tone from "tone";
//import classNames from "classnames";

//* Create note grid.
function GenerateGrid() {
  const grid = [];
  for (let i = 0; i < 8; i++) {
    let column = [
      { note: "A", isActive: false },
      { note: "G", isActive: false },
      { note: "E", isActive: false },
      { note: "D", isActive: false },
      { note: "C", isActive: false },
    ];
    grid.push(column);
  }
  return grid;
}

const CHOSEN_OCTAVE = "4";

//!Component to export
//?Component to export

export default function SequencerApp() {
  const [grid, setGrid] = useState(GenerateGrid());
  GenerateGrid();

  const [isPlaying, setIsPlaying] = useState(false);

  //*visualization... working?
  const [currentColumn, setCurrentColumn] = useState(null);

  //*polySynth to support chords
  //! possibly linked to start time error

  const synth = new Tone.PolySynth().toDestination();

  function handleNoteClick(clickedColumn, clickedNote) {
    let updatedGrid = grid.map((column, columnIndex) =>
      column.map((cell, cellIndex) => {
        let cellCopy = cell;

        if (columnIndex === clickedColumn && cellIndex === clickedNote) {
          cellCopy.isActive = !cell.isActive;
        }

        return cellCopy;
      })
    );

    //Updates the grid with the new note toggled
    setGrid(updatedGrid);
  }

  const PlayMusic = async () => {
    //* stores notes in sequence
    let music = [];

    grid.map((column) => {
      let columnNotes = [];
      column.map(
        (shouldPlay) =>
          //If isActive, push the given note, with our chosen octave
          shouldPlay.isActive &&
          columnNotes.push(shouldPlay.note + CHOSEN_OCTAVE)
      );
      music.push(columnNotes);
    });

    // Starts our Tone context
    await Tone.start();

    //Tone.Sequence();
    //@param callback
    //@param "events" to send with callback
    //@param subdivision  to engage callback
    const Sequencer = new Tone.Sequence(
      (time, column) => {
        // Highlight column with styling
        setCurrentColumn(column);

        //Sends the active note to  PolySynth
        synth.triggerAttackRelease(music[column], "8n", time);
      },
      [0, 1, 2, 3, 4, 5, 6, 7],
      "8n"
    );

    if (isPlaying) {
      //* stop playing if playing
      setIsPlaying(false);
      setCurrentColumn(null);

      await Tone.Transport.stop();
      await Sequencer.stop();
      await Sequencer.clear();
      await Sequencer.dispose();

      return;
    }
    setIsPlaying(true);
    // Toggles playback
    await Sequencer.start();
    await Tone.Transport.start();
  };

  return (
    <div className="Sequencer-App">
      <div className="note-wrapper">
        {grid.map((column, columnIndex) => (
          <div
            className={
              ("note-column",
              {
                "note-column--active": currentColumn === columnIndex,
              })
            }
            key={columnIndex + "column"}
          >
            {column.map(({ note, isActive }, noteIndex) => (
              <NoteButton
                note={note}
                isActive={isActive}
                onClick={() => handleNoteClick(columnIndex, noteIndex)}
                key={note + columnIndex}
              />
            ))}
          </div>
        ))}
      </div>
      <button className="play-button" onClick={() => PlayMusic()}>
        {isPlaying ? "Stop" : "Play"}
      </button>
    </div>
  );
}

const NoteButton = ({ note, isActive, ...rest }) => {
  const classes = isActive ? "note note--active" : "note";
  return (
    <button className={classes} {...rest}>
      {note}
    </button>
  );
};

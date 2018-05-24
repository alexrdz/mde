import React, { Component } from 'react';
import NotesListItem from './NotesListItem';

function NotesList (props) {
  const {notes, handleNoteClick} = props;
  const notesList = notes.map(note => <NotesListItem key={note} note={note} handleNoteClick={handleNoteClick} />)

  return (
    <ul className="p-4 absolute pin-r pin-b" role="navigation">
      {notesList}
    </ul>
  );
}

export default NotesList;
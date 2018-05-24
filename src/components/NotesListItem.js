import React, { Component } from 'react';

function NotesListItem (props) {
  const {note, handleNoteClick} = props;
  
  return (
    <li 
      onClick={() => handleNoteClick(note)} 
      className="cursor-pointer"
      >
      {note}
    </li>
  );
}

export default NotesListItem;
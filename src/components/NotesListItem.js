import React, { Component } from 'react';

function NotesListItem (props) {
  const {note, handleNoteClick} = props;
  
  return (
    <li 
      onClick={() => handleNoteClick(note)} 
      className=" mb-2 cursor-pointer underline hover:no-underline"
      >
      {note}
    </li>
  );
}

export default NotesListItem;
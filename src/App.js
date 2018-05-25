import React, { Component } from 'react';
import marked from 'marked';

import NotesList from './components/NotesList';

class App extends Component {
  constructor(props) {
    super(props);
    
    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });

    this.state = {
      markdownText: '',
      title: '',
      savedNotes: []
    }
  }

  componentDidMount () {
    let savedNotes = [];
    
    Object.keys(localStorage).map((k, i) => {
      savedNotes.push(k);
    });

    this.setState((prevState, props) => ({
      savedNotes
    }));
  }
  
  
  componentWillMount () {
    console.log('localStorage', localStorage);
  }

  handleTextChange = (e) => {
    const markdownText = e.target.value;

    this.setState((prevState, props) => ({
      markdownText
    }));

    if (localStorage) {
      localStorage.setItem('Current Note', this.state.markdownText);
    }
  };

  handleTitleChange = (e) => {
    const title = e.target.value;

    this.setState((prevState, props) => ({
      title
    }));
  };

  handleSubmit = () => {
    console.log('this.state', this.state);
    if (localStorage) {
      localStorage.setItem(this.state.title, this.state.markdownText);
    }
  }

  handleNoteClick = (e) => {
    const savedNoteContent = localStorage.getItem(e);

    this.setState((prevState, props) => ({
      markdownText: savedNoteContent
    }));
  };

  render() {
    const savedHtml = localStorage.getItem('Current Note') || '';
    const html = marked(this.state.markdownText || savedHtml || '');
    const {savedNotes} = this.state;

    return (
      <div className="h-screen">


        

        <div className="flex bg-grey-lighter text-grey-darker">

        <div className="w-1/5 p-4 h-screen bg-grey">
          <NotesList notes={savedNotes} handleNoteClick={this.handleNoteClick} />
          <div className="p-4">
            <label htmlFor="note-title" className="mr-2">Save this note</label>
            <input id="note-title" className="p-2 border border-grey-light mr-2" type="text" onChange={this.handleTitleChange} />
            <button onClick={this.handleSubmit}>Save</button>
          </div>
        </div>
        
        
        <textarea 
          autoFocus
          className="w-2/5 p-6 bg-grey-lighter text-grey-darker bg-white"
          value={this.state.markdownText}
          onChange={this.handleTextChange}
          >
          </textarea>

          
          <div className="w-2/5 h-screen p-6" dangerouslySetInnerHTML={{__html: html}} />
        </div>

        
      </div>
    );
  }
}

export default App;

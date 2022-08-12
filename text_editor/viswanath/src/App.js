import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import "../src/App.css";
import draftToHtml from "draftjs-to-html";


class EditorConvertToHTML extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div className="editor">
        <header className="App-header">
        <h1>VISWANATH REACT TEXT EDITOR </h1>
        <p>Enter your text in the below box and perform custom beautify options</p>
        </header>
        
        <Editor
          editorState={editorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          onEditorStateChange={this.onEditorStateChange}
        />
        
          <h2>Below one genrates HTML code for the above text</h2>
        
         <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        ></textarea>
      
      </div>
    );
  }
}

export default EditorConvertToHTML;
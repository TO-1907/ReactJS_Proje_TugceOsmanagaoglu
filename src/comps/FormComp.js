import React, {Component} from "react";
import ReactDOM from "react-dom";
import axios from "axios"; 

class FormComp extends React.Component{
  render() {
    
// degisken tanimlama
//const showResults = false;

return(
   // div ile yazdigimiz sey JSX formati  src={this.state.file}
  <div>
        <label id="formCompTitle" onChange={this.handleChange} onClick={() => this.handleLabelClick(this.props.titleName)}>{this.props.formCompTitle}</label>
        <br/><br/>
        <textArea id="formCompDesc" onChange={this.handleChange}>{this.props.formCompDesc}</textArea>
        <br/><br/>

        <div>
              <label for="file-input">
                <img id = "FormCompFile" src="https://colorlib.com/wp/wp-content/uploads/sites/2/jquery-file-upload-scripts.png" width="50%"/>
              </label>
              <input id="file-input" type="file" style={{display:'none'}} onClick={this.onFileUpload}/>              
        </div>
  </div>
      );

}

state = { 
  
      // Initially, no file is selected 
      selectedFile: null
    }; 
     
    // On file select (from the pop up) 
    onFileChange = event => { 
     
      // Update the state 
      this.setState({ selectedFile: event.target.files[0] }); 
     
    }; 
     
    // On file upload (click the upload button) 
    onFileUpload = () => { 
     
      // Create an object of formData 
      const formData = new FormData(); 
     
      // Update the formData object 
      formData.append( "myFile", 
        this.state.selectedFile ); 
     
      // Details of the uploaded file 
      console.log(this.state.selectedFile); 
     
      // Request made to the backend api 
      // Send formData object 
      axios.post("api/uploadfile", formData); 
    }; 
     
    // File content to be displayed after 
    // file upload is complete 
    fileData = () => { 
     
      if (this.state.selectedFile) 
      {
        return (
          <div> 
            {props.FormCompFile.style="src={image." + selectedFile + "}"}
          </div> 
        ); 
      }
    }; 
     

}
export default FormComp;

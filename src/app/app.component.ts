import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import * as BlabEditor from 'ckeditor/build/ckeditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Upload image in ckeditor with angular and php';

  Editor = BlabEditor;
  editorConfig = {
    placeholder: 'Type the content here ...', 
    simpleUpload : { uploadUrl : "http://localhost/server/image/" }
  };

  ngOnInit (){
    
  }

}
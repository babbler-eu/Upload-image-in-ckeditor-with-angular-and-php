import { Component } from '@angular/core';
import type { AbstractControl } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import * as BlabEditor from 'ckeditor/build/ckeditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Upload image in ckeditor with angular and php';

  Editor = BlabEditor;
  editorConfig = {
    placeholder: 'Type the content here ...', 
    simpleUpload : { uploadUrl : "http://localhost/server/upload_image.php" }
  };
  
  public demoReactiveForm = new FormGroup( {
		name: new FormControl( 'John' ),
		surname: new FormControl( 'Doe' ),
		description: new FormControl( '<p>A <b>really</b> nice fellow.</p>' )
	} );

	public formDataPreview?: string;

	public ngAfterViewInit(): void {
		this.demoReactiveForm!.valueChanges
			.subscribe( values => {
				this.formDataPreview = JSON.stringify( values );
			} );
	}

	public onSubmit(): void {
		console.log( 'Form submit, model', this.demoReactiveForm.value );
	}

	public reset(): void {
		this.demoReactiveForm!.reset();
	}

	public get description(): AbstractControl {
		return this.demoReactiveForm!.controls.description;
	}

  

}
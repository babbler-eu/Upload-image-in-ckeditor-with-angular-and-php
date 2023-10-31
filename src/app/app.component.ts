import { Component } from '@angular/core';
import type { AbstractControl } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import Editor from '../../ckeditor/build/ckeditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Upload image in ckeditor with angular and php';

  editor = Editor;
  editorConfig = {
    placeholder: 'Type the content here ...', 
    simpleUpload : { uploadUrl : "http://localhost/server/upload.php" }
  };
  
  public demoReactiveForm = new FormGroup( {
		name: new FormControl( 'Raffy' ),
		surname: new FormControl( 'Garage' ),
		description: new FormControl( '<p><b>Upload</b> image with angular 16 and Php.</p>' )
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

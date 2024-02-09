import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

myForm: FormGroup = new FormGroup({});

  constructor( private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({ 
      fname:['', Validators.required],
      lname:['', Validators.required]

    });
  }

  onSubmit(){
    if(this.myForm.valid){
      const formData = this.myForm.value;

      localStorage.setItem('formData', JSON.stringify(formData));
    }
     console.log(FormData);
  }

}

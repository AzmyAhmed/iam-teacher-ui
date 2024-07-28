import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { IamteacherFormsService } from '../../service/iamteacher-forms.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,TranslateModule
  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent implements OnInit {
  @Input() formName!: string;
  @Input() title!: string;
  @Input() iconClass!: string;
  @Input() gridClass: string = 'col-sm-6 mb-3';

  @Output() formSubmit = new EventEmitter<any>();

  form!: FormGroup;
  fields: any[] = [];

  constructor(private fb: FormBuilder, private formConfigService: IamteacherFormsService) { }

  ngOnInit(): void {
    this.formConfigService.getFormConfig(this.formName).subscribe(config => {
      this.fields = config[this.formName].fields;
      this.form = this.createFormGroup(this.fields);
    });
  }

  createFormGroup(fields: any[]): FormGroup {
    const group: any = {};
    fields.forEach(field => {
      if (field.type !== 'button') {
        const validators = field.required ? [Validators.required] : [];
        group[field.name] = new FormControl('', validators);
      }
    });
    return new FormGroup(group);
  }

  submitForm(): void {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    } else {
      this.form.markAllAsTouched(); // Mark all controls as touched to display validation errors
    }
  }
}
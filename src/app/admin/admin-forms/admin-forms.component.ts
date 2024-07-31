import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AdminFormsService } from '../services/admin-forms.service';

@Component({
  selector: 'app-admin-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule, TranslateModule
  ],
  templateUrl: './admin-forms.component.html',
  styleUrl: './admin-forms.component.css'
})
export class AdminFormsComponent implements OnInit {
  @Input() formName!: string;
  @Input() title!: string;
  @Input() iconClass!: string;
  @Input() gridClass: string = 'col-sm-6 mb-3';

  @Output() formSubmit = new EventEmitter<any>();

  form!: FormGroup;
  fields: any[] = [];

  constructor(private fb: FormBuilder, private formsService: AdminFormsService) { }

  ngOnInit(): void {
    this.formsService.getFormConfig(this.formName).subscribe(config => {
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
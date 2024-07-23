import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-option',
  standalone: true,
  imports: [
    // other modules
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './select-option.component.html',
  styleUrl: './select-option.component.css'
})
export class SelectOptionComponent implements OnInit, OnChanges {
  @Input() options: any[] = [];
  @Output() selectedOptionChange = new EventEmitter<any>();

  optionControl = new FormControl();
  filteredOptions!: Observable<any[]>;

  ngOnInit() {
    // Initialize the optionControl with the first option if options are available
    if (this.options.length > 0) {
      this.optionControl.setValue(this.options[0].NameEn);
      this.selectedOptionChange.emit(this.options[0]);
    }

    this.filteredOptions = this.optionControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

    this.optionControl.valueChanges.subscribe(value => {
      // Ensure the value is one of the options
      const selectedOption = this.options.find(option => option.NameEn === value);
      if (selectedOption) {
        this.selectedOptionChange.emit(selectedOption);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    // if (changes['options'] && this.options.length > 0) {
    //   // Update the default value when options change
    //   this.optionControl.setValue(this.options[0].NameEn);
    //   this.selectedOptionChange.emit(this.options[0]);
    // }
  }

  onFocus() {
    // Optionally handle focus; avoid clearing if you want to keep the selected value
    // If you want to clear the input field on focus, use the following lines
   this.optionControl.setValue('');
    this.selectedOptionChange.emit(null);
  }

  onBlur() {
    // Optionally clear the input field on blur, if desired
    // Uncomment the following lines if you want to clear the input field on blur
   //this.optionControl.setValue('');
    // this.selectedOptionChange.emit(null);
  }

  onOptionSelected(event: any) {
    const selectedOption = this.options.find(option => option.NameEn === event.option.value);
    this.optionControl.setValue(selectedOption ? selectedOption.NameEn : '');
    this.selectedOptionChange.emit(selectedOption);
  }

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.NameEn.toLowerCase().includes(filterValue));
  }
}
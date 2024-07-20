import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() content!: TemplateRef<any>;
  isOpen = false;
  @Input() title: string = '';  // Add a title input
  @Input() iconClass: string = ''
  open() {
    if (this.content) {
      this.isOpen = true;
    } else {
      console.error('Modal content is not defined');
    }
  }

  close() {
    this.isOpen = false;
  }
}

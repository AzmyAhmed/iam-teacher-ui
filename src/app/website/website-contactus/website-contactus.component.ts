import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NotificationService } from '../../shared/service/notification.service';
import { Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-website-contactus',
  templateUrl: './website-contactus.component.html',
  styleUrl: './website-contactus.component.css'
})
export class WebsiteContactusComponent {
  emailForm!: FormGroup;

  constructor( private meta: Meta) {
  }

  ngOnInit(): void {
    this.metaDescription();
  }


  sendEmail(e: Event) {
    // e.preventDefault();

    // emailjs.sendForm('service_r10lcgd', 'template_366diwi', e.target as HTMLFormElement, '5fN1GjW87249AppkL')
    //   .then((result: EmailJSResponseStatus) => {
    //     console.log(result.text);
    //     this.notify.showSuccess('Email sent successfully!', 'Success')
    //     this.router.navigate(['/main']);
    //   }, (error) => {
    //     console.log(error.text);
    //     this.notify.showError('Failed to send email. Please try again later.', 'Failed')

    //   });

  }
  metaDescription() {
    this.meta.updateTag({ name: 'description', content: 'azmy ahmed software engineer' });
  }
}


import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-website-landingpage',
  templateUrl: './website-landingpage.component.html',
  styleUrl: './website-landingpage.component.css'
})
export class WebsiteLandingpageComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  isButtonVisible = false;


  constructor() { }

  ngOnInit(): void {

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
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }



}

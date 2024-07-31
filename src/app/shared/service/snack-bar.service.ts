import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  snackBarClass = '';

  constructor(private _snackBar: MatSnackBar, public translate: TranslateService) { }

  // db validations 26-7-2024
  showDbSucessSnackBar(message: string, action: string) {
    this.snackBarClass = 'success-snackbar';
    this._snackBar.open(message, action, {
      duration: 2500,
      horizontalPosition: 'center', // or 'start', 'end'
      verticalPosition: 'bottom', // or 'bottom',
      panelClass: [this.snackBarClass]

    });
  }
  showDbErrorSnackBar(message: string, action: string) {
    this.snackBarClass = 'error-snackbar';

    this._snackBar.open(message, action, {
      duration: 3500,
      horizontalPosition: 'start', // or 'start', 'end'
      verticalPosition: 'bottom',
      panelClass: [this.snackBarClass]
      // or 'bottom'
    });
  }
  showDbWarnSnackBar(message: string, action: string) {
    this.snackBarClass = 'warn-snackbar';

    this._snackBar.open(message, action, {
      duration: 2500,
      horizontalPosition: 'center', // or 'start', 'end'
      verticalPosition: 'bottom', // or 'bottom'
      panelClass: [this.snackBarClass]
    });
  }

  // ui validations
  showSucessSnackBar(message: string, action: string) {
    this.snackBarClass = 'success-snackbar';

    this._snackBar.open(message, action, {
      duration: 3500,
      horizontalPosition: 'center', // or 'start', 'end'
      verticalPosition: 'bottom', // or 'bottom'
      panelClass: [this.snackBarClass]
    });
  }
  showWarnSnackBar(message: string, action: string) {
    this.snackBarClass = 'warn-snackbar';

    this._snackBar.open(message, action, {
      duration: 3500,
      horizontalPosition: 'center', // or 'start', 'end'
      verticalPosition: 'bottom', // or 'bottom'
      panelClass: [this.snackBarClass]
    });
  }
  showErrorSnackBar(message: string, action: string) {
    this.translate.get(message).subscribe(translatedMessage => {
      this.translate.get(action).subscribe(translatedAction => {
        this._snackBar.open(translatedMessage, translatedAction, {
          duration: 2500,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ['error-snackbar']
        });
      });
    });
  }
}

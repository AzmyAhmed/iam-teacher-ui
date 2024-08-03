import { Component, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderService } from '../../../shared/component/header/header.service';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-admin-links-stp',
  standalone: true,
  imports: [TranslateModule, FormsModule],
  templateUrl: './admin-links-stp.component.html',
  styleUrl: './admin-links-stp.component.css'
})
export class AdminLinksStpComponent {

}

import {Component,} from '@angular/core';

@Component({
  selector: 'app-badge-overview-example',
  templateUrl: './badge-overview-example.component.html',
  styleUrls: ['./badge-overview-example.component.css']
})
export class BadgeOverviewExampleComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}

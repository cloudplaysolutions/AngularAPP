import { Component } from '@angular/core';
import { BeatsListComponent } from './components/beats-list/beats-list.component';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [BeatsListComponent, NavHeaderComponent]
})
export class AppComponent {
  title = 'illpeople-music';
}

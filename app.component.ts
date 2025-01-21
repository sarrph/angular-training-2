import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule, DatePipe } from '@angular/common';
import { CapitalizePipe } from './capitalize.pipe';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, CommonModule, DatePipe, CapitalizePipe],
  templateUrl: './app.component.html',
  styleUrls: ['./styles.css'],
})
export class AppComponent {
  tasks = [
    { title: 'Complete Angular exercise', completed: false, dueDate: new Date() },
    { title: 'Read Angular documentation', completed: true, dueDate: new Date('2024-12-25') },
    { title: 'Review Angular concepts', completed: false, dueDate: new Date('2024-11-15') },
  ];
}

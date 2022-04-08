import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-view-component',
  templateUrl: './teacher-view.component.html'
})
export class TeacherViewComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}

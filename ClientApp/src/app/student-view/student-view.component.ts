import { Component } from '@angular/core';

@Component({
  selector: 'app-student-view-component',
  templateUrl: './student-view.component.html'
})
export class StudentViewComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}

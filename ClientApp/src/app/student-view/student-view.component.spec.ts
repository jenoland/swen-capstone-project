import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewComponent } from './student-view.component';

describe('TeacherViewComponent', () => {
  let fixture: ComponentFixture<StudentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentViewComponent);
    fixture.detectChanges();
  });

  it('should display a title', async(() => {
    const titleText = fixture.nativeElement.querySelector('h1').textContent;
    expect(titleText).toEqual('Student');
  }));
});

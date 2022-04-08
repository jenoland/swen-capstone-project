import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherViewComponent } from './teacher-view.component';

describe('TeacherViewComponent', () => {
  let fixture: ComponentFixture<TeacherViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherViewComponent);
    fixture.detectChanges();
  });

  it('should display a title', async(() => {
    const titleText = fixture.nativeElement.querySelector('h1').textContent;
    expect(titleText).toEqual('Teacher');
  }));
});

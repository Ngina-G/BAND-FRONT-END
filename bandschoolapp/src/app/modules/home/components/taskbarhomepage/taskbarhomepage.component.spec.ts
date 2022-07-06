import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskbarhomepageComponent } from './taskbarhomepage.component';

describe('TaskbarhomepageComponent', () => {
  let component: TaskbarhomepageComponent;
  let fixture: ComponentFixture<TaskbarhomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskbarhomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskbarhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

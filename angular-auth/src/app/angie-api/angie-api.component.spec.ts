import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngieApiComponent } from './angie-api.component';

describe('AngieApiComponent', () => {
  let component: AngieApiComponent;
  let fixture: ComponentFixture<AngieApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngieApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngieApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

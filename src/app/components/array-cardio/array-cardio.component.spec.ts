import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayCardioComponent } from './array-cardio.component';

describe('ArrayCardioComponent', () => {
  let component: ArrayCardioComponent;
  let fixture: ComponentFixture<ArrayCardioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayCardioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayCardioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

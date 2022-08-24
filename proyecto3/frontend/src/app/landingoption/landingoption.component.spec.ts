import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingoptionComponent } from './landingoption.component';

describe('LandingoptionComponent', () => {
  let component: LandingoptionComponent;
  let fixture: ComponentFixture<LandingoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingoptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

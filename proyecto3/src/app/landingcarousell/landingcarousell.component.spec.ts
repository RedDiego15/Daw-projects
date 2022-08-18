import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingcarousellComponent } from './landingcarousell.component';

describe('LandingcarousellComponent', () => {
  let component: LandingcarousellComponent;
  let fixture: ComponentFixture<LandingcarousellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingcarousellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingcarousellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

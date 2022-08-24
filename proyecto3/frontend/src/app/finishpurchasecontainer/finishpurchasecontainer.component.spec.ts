import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishpurchasecontainerComponent } from './finishpurchasecontainer.component';

describe('FinishpurchasecontainerComponent', () => {
  let component: FinishpurchasecontainerComponent;
  let fixture: ComponentFixture<FinishpurchasecontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishpurchasecontainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishpurchasecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

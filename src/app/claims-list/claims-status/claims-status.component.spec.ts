import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsStatusComponent } from './claims-status.component';

describe('ClaimsStatusComponent', () => {
  let component: ClaimsStatusComponent;
  let fixture: ComponentFixture<ClaimsStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimsStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseOptionComponent } from './lease-option.component';

describe('LeaseOptionComponent', () => {
  let component: LeaseOptionComponent;
  let fixture: ComponentFixture<LeaseOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaseOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaseOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieweditLeaseComponent } from './viewedit-lease.component';

describe('VieweditLeaseComponent', () => {
  let component: VieweditLeaseComponent;
  let fixture: ComponentFixture<VieweditLeaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VieweditLeaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VieweditLeaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

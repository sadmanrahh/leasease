import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTestingComponent } from './header-testing.component';

describe('HeaderTestingComponent', () => {
  let component: HeaderTestingComponent;
  let fixture: ComponentFixture<HeaderTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

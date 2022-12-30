import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadleaseComponent } from './uploadlease.component';

describe('UploadleaseComponent', () => {
  let component: UploadleaseComponent;
  let fixture: ComponentFixture<UploadleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadleaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInstallComponent } from './dialog-install.component';

describe('DialogInstallComponent', () => {
  let component: DialogInstallComponent;
  let fixture: ComponentFixture<DialogInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogInstallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

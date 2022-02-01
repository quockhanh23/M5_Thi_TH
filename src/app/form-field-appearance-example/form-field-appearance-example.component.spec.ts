import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldAppearanceExampleComponent } from './form-field-appearance-example.component';

describe('FormFieldAppearanceExampleComponent', () => {
  let component: FormFieldAppearanceExampleComponent;
  let fixture: ComponentFixture<FormFieldAppearanceExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFieldAppearanceExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldAppearanceExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

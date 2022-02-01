import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeOverviewExampleComponent } from './badge-overview-example.component';

describe('BadgeOverviewExampleComponent', () => {
  let component: BadgeOverviewExampleComponent;
  let fixture: ComponentFixture<BadgeOverviewExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgeOverviewExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeOverviewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

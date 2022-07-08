import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingHomePageComponent } from './testing-home-page.component';

describe('TestingHomePageComponent', () => {
  let component: TestingHomePageComponent;
  let fixture: ComponentFixture<TestingHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

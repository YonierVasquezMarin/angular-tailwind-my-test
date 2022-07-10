import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionNotSelectedComponent } from './option-not-selected.component';

describe('OptionNotSelectedComponent', () => {
  let component: OptionNotSelectedComponent;
  let fixture: ComponentFixture<OptionNotSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionNotSelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionNotSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylesScssComponent } from './styles-scss.component';

describe('StylesScssComponent', () => {
  let component: StylesScssComponent;
  let fixture: ComponentFixture<StylesScssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylesScssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StylesScssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

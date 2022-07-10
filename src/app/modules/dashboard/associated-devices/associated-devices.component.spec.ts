import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatedDevicesComponent } from './associated-devices.component';

describe('AssociatedDevicesComponent', () => {
  let component: AssociatedDevicesComponent;
  let fixture: ComponentFixture<AssociatedDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociatedDevicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatedDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

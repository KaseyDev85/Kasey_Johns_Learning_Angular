import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDetailComponentComponent } from './vehicle-detail-component.component';

describe('VehicleDetailComponentComponent', () => {
  let component: VehicleDetailComponentComponent;
  let fixture: ComponentFixture<VehicleDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleDetailComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

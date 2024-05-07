import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSubastaComponent } from './crear-subasta.component';

describe('CrearSubastaComponent', () => {
  let component: CrearSubastaComponent;
  let fixture: ComponentFixture<CrearSubastaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearSubastaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearSubastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

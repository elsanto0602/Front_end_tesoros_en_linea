import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerSubastaComponent } from './ver-subasta.component';

describe('VerSubastaComponent', () => {
  let component: VerSubastaComponent;
  let fixture: ComponentFixture<VerSubastaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerSubastaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerSubastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

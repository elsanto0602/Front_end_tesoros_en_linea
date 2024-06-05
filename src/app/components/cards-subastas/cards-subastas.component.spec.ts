import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsSubastasComponent } from './cards-subastas.component';

describe('CardsSubastasComponent', () => {
  let component: CardsSubastasComponent;
  let fixture: ComponentFixture<CardsSubastasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsSubastasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsSubastasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

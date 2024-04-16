import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayOnomatopiaComponent } from './display-onomatopia.component';

describe('DisplayOnomatopiaComponent', () => {
  let component: DisplayOnomatopiaComponent;
  let fixture: ComponentFixture<DisplayOnomatopiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayOnomatopiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayOnomatopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

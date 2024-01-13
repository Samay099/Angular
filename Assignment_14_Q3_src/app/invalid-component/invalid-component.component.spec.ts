import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidComponentComponent } from './invalid-component.component';

describe('InvalidComponentComponent', () => {
  let component: InvalidComponentComponent;
  let fixture: ComponentFixture<InvalidComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvalidComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvalidComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

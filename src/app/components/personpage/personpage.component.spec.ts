import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonpageComponent } from './personpage.component';

describe('PersonpageComponent', () => {
  let component: PersonpageComponent;
  let fixture: ComponentFixture<PersonpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

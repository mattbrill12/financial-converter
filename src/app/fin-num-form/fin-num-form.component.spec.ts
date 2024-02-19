import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinNumFormComponent } from './fin-num-form.component';

describe('FinNumFormComponent', () => {
  let component: FinNumFormComponent;
  let fixture: ComponentFixture<FinNumFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinNumFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinNumFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

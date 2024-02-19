import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinNumDetailComponent } from './fin-num-detail.component';

describe('FinNumDetailComponent', () => {
  let component: FinNumDetailComponent;
  let fixture: ComponentFixture<FinNumDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinNumDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinNumDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

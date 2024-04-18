import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedProjectComponent } from './detailed-project.component';

describe('DetailedProjectComponent', () => {
  let component: DetailedProjectComponent;
  let fixture: ComponentFixture<DetailedProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailedProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailedProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryModulComponent } from './category-modul.component';

describe('CategoryModulComponent', () => {
  let component: CategoryModulComponent;
  let fixture: ComponentFixture<CategoryModulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryModulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryModulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

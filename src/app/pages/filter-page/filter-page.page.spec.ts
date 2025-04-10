import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterPagePage } from './filter-page.page';

describe('FilterPagePage', () => {
  let component: FilterPagePage;
  let fixture: ComponentFixture<FilterPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewProductComponentPage } from './view-product-component.page';

describe('ViewProductComponentPage', () => {
  let component: ViewProductComponentPage;
  let fixture: ComponentFixture<ViewProductComponentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // @ts-ignore
    expect(component).toBeTruthy();
  });
});

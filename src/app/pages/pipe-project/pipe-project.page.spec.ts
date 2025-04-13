import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PipeProjectPage } from './pipe-project.page';

describe('PipeProjectPage', () => {
  let component: PipeProjectPage;
  let fixture: ComponentFixture<PipeProjectPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeProjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EvcalendarPage } from './evcalendar.page';

describe('EvcalendarPage', () => {
  let component: EvcalendarPage;
  let fixture: ComponentFixture<EvcalendarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EvcalendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

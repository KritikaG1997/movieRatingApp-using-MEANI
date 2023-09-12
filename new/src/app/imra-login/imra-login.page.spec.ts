import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImraLoginPage } from './imra-login.page';

describe('ImraLoginPage', () => {
  let component: ImraLoginPage;
  let fixture: ComponentFixture<ImraLoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ImraLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

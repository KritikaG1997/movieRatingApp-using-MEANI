import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConditionsAndPrivacyPage } from './conditions-and-privacy.page';

describe('ConditionsAndPrivacyPage', () => {
  let component: ConditionsAndPrivacyPage;
  let fixture: ComponentFixture<ConditionsAndPrivacyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConditionsAndPrivacyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

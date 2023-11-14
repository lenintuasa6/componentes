import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonAvatarPage } from './ion-avatar.page';

describe('IonAvatarPage', () => {
  let component: IonAvatarPage;
  let fixture: ComponentFixture<IonAvatarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IonAvatarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonButtonPage } from './ion-button.page';

describe('IonButtonPage', () => {
  let component: IonButtonPage;
  let fixture: ComponentFixture<IonButtonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IonButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

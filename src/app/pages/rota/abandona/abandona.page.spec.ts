import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AbandonaPage } from './abandona.page';

describe('AbandonaPage', () => {
  let component: AbandonaPage;
  let fixture: ComponentFixture<AbandonaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbandonaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbandonaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BancoPage } from './banco.page';

describe('BancoPage', () => {
  let component: BancoPage;
  let fixture: ComponentFixture<BancoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BancoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BancoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

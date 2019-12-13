import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PessoalPage } from './pessoal.page';

describe('PessoalPage', () => {
  let component: PessoalPage;
  let fixture: ComponentFixture<PessoalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PessoalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DadosEditarPage } from './dados-editar.page';

describe('DadosEditarPage', () => {
  let component: DadosEditarPage;
  let fixture: ComponentFixture<DadosEditarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosEditarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DadosEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntrevistaPage } from './entrevista.page';

describe('EntrevistaPage', () => {
  let component: EntrevistaPage;
  let fixture: ComponentFixture<EntrevistaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrevistaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntrevistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

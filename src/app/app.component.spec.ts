import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PokeCommomModule } from './common/poke-commom.module';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        PokeCommomModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        // AppRouting,
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

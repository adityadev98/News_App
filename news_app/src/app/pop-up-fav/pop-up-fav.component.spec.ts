import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PopUpFavComponent } from './pop-up-fav.component';

describe('PopUpFavComponent', () => {
  let component: PopUpFavComponent;
  let fixture: ComponentFixture<PopUpFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopUpFavComponent],
      imports:[HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

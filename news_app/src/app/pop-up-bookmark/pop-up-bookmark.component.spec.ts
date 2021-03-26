import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PopUpBookmarkComponent } from './pop-up-bookmark.component';
import { By } from '@angular/platform-browser';

describe('PopUpBookmarkComponent', () => {
  let component: PopUpBookmarkComponent;
  let fixture: ComponentFixture<PopUpBookmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopUpBookmarkComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});

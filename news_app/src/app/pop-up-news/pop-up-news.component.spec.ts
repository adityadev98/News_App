import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PopUpNewsComponent } from './pop-up-news.component';
import { NewsServiceService } from '../news-service.service';

describe('PopUpNewsComponent', () => {
  let component: PopUpNewsComponent;
  let fixture: ComponentFixture<PopUpNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopUpNewsComponent],
      imports: [HttpClientTestingModule],
      providers: [NewsServiceService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});

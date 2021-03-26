import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeaderComponent } from './header.component';
import { MatMenuModule } from '@angular/material/menu';
import { By } from '@angular/platform-browser';
import { NewsServiceService } from '../news-service.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [HttpClientTestingModule, MatMenuModule,RouterTestingModule,MatSnackBarModule],
      providers: [NewsServiceService,DatePipe]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('**should contain a search field**', () => {
    let element = fixture.debugElement.query(By.css('input'));
    expect(element).toBeTruthy();
    expect(element.nativeElement.value).toBe('');
  })

  it('**should contain a navigation bar**', () => {
    let element = fixture.debugElement.query(By.css('nav'));
    expect(element).toBeTruthy();
  })

  it('**should contain unordered list**', () => {
    let element = fixture.debugElement.query(By.css('ul'));
    expect(element).toBeTruthy();
  })

  it('**should contain mat-menu**', () => {
    let element = fixture.debugElement.query(By.css('mat-menu'));
    expect(element).toBeTruthy();
  })

  it('**should have anchor**', () => {
    let element = fixture.debugElement.query(By.css('a'));
    expect(element).toBeTruthy();
  })


});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DisplayNewsComponent } from './display-news.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxPaginationModule } from 'ngx-pagination';
import { By } from '@angular/platform-browser';

describe('DisplayNewsComponent', () => {
  let component: DisplayNewsComponent;
  let fixture: ComponentFixture<DisplayNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayNewsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, MatSnackBarModule, NgxPaginationModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('**testing value of pagination variable**', () => {
    expect(component.p).toBe(1);
  })

  it('**testing initial value of flag**', () => {
    expect(component.flag).toBe(0);
  })

  it('**testing initial value of index**', () => {
    expect(component.index).toBe(0);
  })

  it('**should contain app-header**', () => {
    let element = fixture.debugElement.query(By.css('app-header'));
    expect(element).toBeTruthy();
  })

  it('**should contain pagination controls**', () => {
    let element = fixture.debugElement.query(By.css('pagination-controls'));
    expect(element).toBeTruthy();
  })

});

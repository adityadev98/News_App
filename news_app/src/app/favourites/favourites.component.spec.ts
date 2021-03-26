import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FavouritesComponent } from './favourites.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxPaginationModule } from 'ngx-pagination';

describe('FavouritesComponent', () => {
  let component: FavouritesComponent;
  let fixture: ComponentFixture<FavouritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavouritesComponent],
      imports:[HttpClientTestingModule,RouterTestingModule,MatSnackBarModule,NgxPaginationModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

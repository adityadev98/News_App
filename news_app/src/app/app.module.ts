import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { DisplayNewsComponent } from './display-news/display-news.component';
import { PopUpNewsComponent } from './pop-up-news/pop-up-news.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Routes, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MatMenuModule } from '@angular/material/menu';
import { PopUpBookmarkComponent } from './pop-up-bookmark/pop-up-bookmark.component';
import { PopUpFavComponent } from './pop-up-fav/pop-up-fav.component';
import { RouterService } from './router.service';
//import { CanActivateRouteGuard } from './can-activate-route.guard';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FavouritesComponent,
    BookmarkComponent,
    DisplayNewsComponent,
    PopUpNewsComponent,
    LoginHeaderComponent,
    RegisterComponent,
    LoginComponent,
    PopUpBookmarkComponent,
    PopUpFavComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    FlexLayoutModule,
    MatToolbarModule,
    FontAwesomeModule,
    NgxPaginationModule,
    MatMenuModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [RouterService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

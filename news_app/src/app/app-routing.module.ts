import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard } from 'can-activate-route.guard';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { DisplayNewsComponent } from './display-news/display-news.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { LoginComponent } from './login/login.component';
import { PopUpBookmarkComponent } from './pop-up-bookmark/pop-up-bookmark.component';
import { PopUpNewsComponent } from './pop-up-news/pop-up-news.component';
import { RegisterComponent } from './register/register.component';
import { PopUpFavComponent } from './pop-up-fav/pop-up-fav.component';
//import { CanActivateRouteGuard } from './can-activate-route.guard';


// const routes: Routes = [
//   {
//     path: '',
//     component: LoginComponent
//   },
//   {
//     path: 'display',
//     component: DisplayNewsComponent
//   },
//   {
//     path: 'register',
//     component: RegisterComponent
//   },
//   {
//     path: 'pop-up-news',
//     component: PopUpNewsComponent
//   },
//   {
//     path: 'bookmarks',
//     component: BookmarkComponent
//   },
//   {
//     path: 'favourites',
//     component: FavouritesComponent
//   },
//   {
//     path: 'pop-up-bookmark',
//     component: PopUpBookmarkComponent
//   }
// ]
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'favourites', component: FavouritesComponent, canActivate: [CanActivateGuard] },
  { path: 'bookmark', component: BookmarkComponent, canActivate: [CanActivateGuard] },
  { path: 'display', component: DisplayNewsComponent, },
  { path: 'pop-up-favourite', component: PopUpFavComponent },
  { path: 'pop-up-bookmark', component: PopUpBookmarkComponent },
  { path: 'pop-up-news', component: PopUpNewsComponent },

  { path: '', redirectTo: 'display', pathMatch: 'full' },
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

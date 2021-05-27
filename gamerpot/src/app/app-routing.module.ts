import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BestGamesPageComponent } from './pages/best-games-page/best-games-page.component';
import { DealsPageComponent } from './pages/deals-page/deals-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { WishlistPageComponent } from './pages/wishlist-page/wishlist-page.component';
import { DomainRoutes } from './shared/routes';

const routes: Routes = [
  {
    path: DomainRoutes.HOME.NG_PATH,
    component: HomePageComponent,
  },
  {
    path: DomainRoutes.DEALS.NG_PATH,
    component: DealsPageComponent,
  },
  {
    path: DomainRoutes.WISHLIST.NG_PATH,
    component: WishlistPageComponent,
  },
  {
    path: DomainRoutes.BEST_GAMES.NG_PATH,
    component: BestGamesPageComponent,
  },
  {
    path: DomainRoutes.GAME.NG_PATH,
    component: GamePageComponent,
  },
  { path: DomainRoutes.ABOUT.NG_PATH, component: AboutComponent },
  {
    path: '',
    redirectTo: DomainRoutes.HOME.NG_PATH,
    pathMatch: 'full',
  },

  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

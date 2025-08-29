import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { NotfoundPage } from './pages/notfound-page/notfound-page';
import { LoginPage } from './pages/login-page/login-page';
import { ProfilePage } from './pages/profile-page/profile-page';
import { AuthGuard } from './services/auth.guard';
import { LogoutPage } from './pages/logout-page/logout-page';
import { GamesPage } from './pages/games-page/games-page';

export const routes: Routes = [
    {path:"",component:HomePage},
    {path:"login",component:LoginPage},
    {path:"member/profile",component:ProfilePage,canActivate:[AuthGuard]},
    {path:"member/list",component:GamesPage,canActivate:[AuthGuard]},
    {path:"logout",component:LogoutPage},
    {path:"**", component:NotfoundPage},
];

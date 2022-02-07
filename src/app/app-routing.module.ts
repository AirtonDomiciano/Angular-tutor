import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// path: uma string que corresponde ao URL na barra de endereços do navegador.
// component: o componente que o roteador deve criar ao navegar para esta rota.
const routes: Routes = [
  // Onde será aberto o site.
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // rotas
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

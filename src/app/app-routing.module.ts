import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageListComponent } from './pages/page-list/page-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pages', component: PageListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

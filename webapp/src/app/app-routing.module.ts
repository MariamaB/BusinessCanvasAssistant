import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BmcanvasListViewComponent} from './components/bmcanvas-list-view/bmcanvas-list-view.component';
import {BmcanvasViewComponent} from './components/bmcanvas-view/bmcanvas-view.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import { QuestionnaireComponent } from './components/questionnaire-view/questionnaire-view.component';
import { TustBuildCanvasViewComponent } from './components/tust-build-canvas-view/tust-build-canvas-view.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'bmcanvas-list',
    component: BmcanvasListViewComponent
  },
  {
    path: 'bmcanvas',
    component: BmcanvasViewComponent
  },
  {
    path: 'questionnaire',
    component: QuestionnaireComponent
  },
  {
    path: 'trust-build-canvas',
    component: TustBuildCanvasViewComponent
  },
  { path: '**', component: PageNotFoundComponent }
  // { path: 'hero/:id', component: HeroDetailComponent },
  // {
  //   path: "business-model-canvas",
  //   component: BusinessModelCanvasComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

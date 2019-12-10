import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { DocumentViewComponent } from "./components/document-view/document-view.component";
import { GraphQLModule } from "./graphql.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from "@angular/material/slider";
import { TextFieldModule } from "@angular/cdk/text-field";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
import { BmcanvasViewComponent } from "./components/bmcanvas-view/bmcanvas-view.component";

const appRoutes: Routes = [
  {
    path: "document-view",
    component: DocumentViewComponent
  },
  {
    path: "bmcanvas-view",
    component: BmcanvasViewComponent
  }
  // { path: 'hero/:id', component: HeroDetailComponent },
  // {path: '', redirectTo: '/heroes', pathMatch: 'full'},
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [AppComponent, DocumentViewComponent, BmcanvasViewComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    ),
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    TextFieldModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

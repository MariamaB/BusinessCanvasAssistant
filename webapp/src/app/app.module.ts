import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BmcanvasListViewComponent } from "./components/bmcanvas-list-view/bmcanvas-list-view.component";
import { GraphQLModule } from "./graphql/graphql.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BmcanvasViewComponent } from "./components/bmcanvas-view/bmcanvas-view.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import {HomeComponent} from "./components/home/home.component";
import {MaterialModule} from "./material/material.module";
import {AppRoutingModule} from "./app-routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ChartsModule } from "ng2-charts";

@NgModule({
  declarations: [
    AppComponent,
    BmcanvasListViewComponent,
    BmcanvasViewComponent,
    PageNotFoundComponent,
    HomeComponent,
    // ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    // ChartsModule,
    ReactiveFormsModule
  ],
  // entryComponents: [ErrorComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatStepperModule } from "@angular/material/stepper";
import { MatRadioModule } from "@angular/material/radio";
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import {MatSliderModule} from "@angular/material/slider";
import {TextFieldModule} from "@angular/cdk/text-field";

const material = [
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatExpansionModule,
  MatStepperModule,
  MatRadioModule,
  MatTableModule,
  MatDialogModule,
  MatSelectModule,
  MatSliderModule,
  TextFieldModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...material
  ],
   exports: [
     ...material
   ]
})
export class MaterialModule { }

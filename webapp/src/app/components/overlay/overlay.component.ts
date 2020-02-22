import { Component, Inject } from "@angular/core";

import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  templateUrl: "overlay.component.html",
  styleUrls: ["overlay.component.css"]
})
export class OverlayComponent {
  public stateChange = 0;

  constructor(
    private dialogRef: MatDialogRef<OverlayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  public closeDialog() {
    this.dialogRef.close();
    // this.dialogRef.close(`${form.value.filename}`);
  }
}

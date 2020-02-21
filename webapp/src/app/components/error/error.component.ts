import { Component, Inject, Injectable } from "@angular/core";

import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  templateUrl: "error.component.html",
  styleUrls: ["error.component.css"]
})
export class ErrorComponent {
  constructor(
    private dialogRef: MatDialogRef<ErrorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  public closeDialog() {
    this.dialogRef.close();
  }
}

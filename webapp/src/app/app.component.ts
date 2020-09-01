import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { MediaObserver, MediaChange } from "@angular/flex-layout";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Frontend";
  projects = true;
  innovation = true;
  pool = true;
  subCanvas = true;

  headline = "Dashboard";

  mediaSub: Subscription;
  deviceXs: boolean;

  constructor(public mediaObserver: MediaObserver) {}

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        console.log(result.mqAlias);
        this.deviceXs = result.mqAlias === "xs" ? true : false;
      }
    );
  }

  public switchToTbc() {
    this.projects = !this.projects;
    this.headline = "Plattform-Stakeholder";
  }

  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }
}

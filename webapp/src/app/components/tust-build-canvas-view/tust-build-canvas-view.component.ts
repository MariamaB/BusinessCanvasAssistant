import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tust-build-canvas-view',
  templateUrl: './tust-build-canvas-view.component.html',
  styleUrls: ['./tust-build-canvas-view.component.css']
})
export class TustBuildCanvasViewComponent implements OnInit {
 public dataSource = {
   business: '',
   product: '',
   relationship: '',
   partner: '',
   platform: '',

 };

  constructor() { }

  ngOnInit(): void {
    console.log(JSON.stringify(history.state.updatedData, null, 2));
    if (history.state.updatedData !== undefined) {
      this.dataSource = history.state.updatedData;
      console.log('passed data ' + this.dataSource);
    }
  }

}

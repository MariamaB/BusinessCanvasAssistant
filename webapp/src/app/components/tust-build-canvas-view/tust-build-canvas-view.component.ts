import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tust-build-canvas-view',
  templateUrl: './tust-build-canvas-view.component.html',
  styleUrls: ['./tust-build-canvas-view.component.css']
})
export class TustBuildCanvasViewComponent implements OnInit {
 public dataSource = [
   'test1',
   'test2',
   'test3'
 ];
 public displayedColumns = [
   {user: 'test4'},
   {user:'test5'},
   {user:'test6'}
 ];
  constructor() { }

  ngOnInit(): void {
    console.log(JSON.stringify(history.state.updatedData, null, 2));
    if (history.state.updatedData !== undefined) {
      console.log('passed data ' + history.state.updatedData);
    }
  }

}

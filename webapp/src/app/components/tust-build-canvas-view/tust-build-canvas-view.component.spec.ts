import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TustBuildCanvasViewComponent } from './tust-build-canvas-view.component';

describe('TustBuildCanvasViewComponent', () => {
  let component: TustBuildCanvasViewComponent;
  let fixture: ComponentFixture<TustBuildCanvasViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TustBuildCanvasViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TustBuildCanvasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

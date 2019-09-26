import { DragDropModule } from '@angular/cdk/drag-drop';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MainDragComponent } from './main-drag.component';

describe('MainDragComponent', () => {
  let component: MainDragComponent;
  let fixture: ComponentFixture<MainDragComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDragComponent ],
      imports: [
        NoopAnimationsModule,
        DragDropModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

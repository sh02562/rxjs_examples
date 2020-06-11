import { Component, OnInit } from '@angular/core';
import { fromEvent, animationFrameScheduler } from 'rxjs';
import { map, takeUntil, switchMap, subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {

  draggable: HTMLElement;
  myElement:HTMLElement = document.querySelector('.draggable');

  constructor() { 
  
  }

  ngOnInit(): void {
    this.draggable = document.querySelector('.draggable');
    let mouseDown$ = fromEvent<MouseEvent>(this.draggable, 'mousedown');
    let mouseMove$ = fromEvent<MouseEvent>(document, 'mousemove');
    let mouseUp$ = fromEvent<MouseEvent>(document, 'mouseup');

    mouseDown$.subscribe(() => {
        ​ 	  mouseMove$
        ​ 	  .pipe(
        ​ 	    map(event => {
        ​ 	      event.preventDefault();
        ​ 	      ​return​ {
        ​ 	        x: event.clientX,
        ​ 	        y: event.clientY
        ​ 	      };
        ​ 	    }),
        ​ 	    takeUntil(mouseUp$)
        ​ 	  )
        ​ 	  .subscribe(pos => {
        ​ 	    ​// Draggable is absolutely positioned​
        ​ 	    this.draggable.style.left = pos.x - this.draggable.offsetHeight / 2 + ​'px'​;
        ​ 	    this.draggable.style.top = pos.y - this.draggable.offsetHeight / 2 + ​'px'​;
        ​ 	  });
        ​ 	});
        mouseDown$.subscribe(event => console.log('start drag'));
        mouseUp$.subscribe(event => console.log('stop drag'));

  }

}

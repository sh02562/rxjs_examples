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
    let mouseUp$ = fromEvent<MouseEvent>(this.draggable, 'mouseup');

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
        ​ 	    this.draggable.style.left = pos.x + ​'px'​;
        ​ 	    this.draggable.style.top = pos.y + ​'px'​;
        ​ 	  });
        ​ 	});


    // const drag$ = mouseDown$.pipe(
    //   switchMap(
    //     (start) => {
    //       return mouseMove$.pipe(map(move => {
    //         move.preventDefault();
    //         return {
    //           left: move.clientX - start.offsetX,
    //           top: move.clientY - start.offsetY
    //         }
    //       }),
    //         takeUntil(mouseUp$));
    //     }));

    // const position$ = drag$.pipe(subscribeOn(animationFrameScheduler));

    // position$.subscribe(pos => {
    //   this.draggable.style.left = pos.left + 'px';
    //   this.draggable.style.top = pos.top + 'px';
    // });

    // mouseDown$.subscribe(() => {console.log("I am in mouse down")});



      // ​ 	  mouseMove$
      // ​ 	  .pipe(
      // ​ 	    map(event => {
      // ​ 	      event.preventDefault();
      // ​ 	      ​return​ {
      // ​ 	        x: event.clientX,
      // ​ 	        y: event.clientY
      // ​ 	      };  
      // ​ 	    }),
      // ​ 	    takeUntil(mouseUp$)
      // ​ 	  )});

     // const position$ = drag$.pipe(subscribeOn(animationFrameScheduler));
      // ​ 	drag$ .subscribe(pos => {
      // ​ 	    ​// Draggable is absolutely positioned​
      // ​ 	    this.draggable.style.left = pos.x + ​'px'​;
      // ​ 	    this.draggable.style.top = pos.y + ​'px'​;
      // ​ 	  });
      ​ 	
  }

}

// let button = document.querySelector('.button');

// let mouseDownStream = Rx.Observable.fromEvent(button, 'mousedown');
// let mouseUpStream = Rx.Observable.fromEvent(document, 'mouseup');

// let dragStream = mouseDownStream
//   .switchMap((event) => {
//     return Rx.Observable
//       .return(event)
//       .delay(250)
//       .takeUntil(mouseUpStream)
//   });

// let dropStream = dragStream
//   .switchMap(() => mouseUpStream.take(1))

// dragStream.subscribe(event => console.log('start drag'));
// dropStream.subscribe(event => console.log('stop drag'));





// mouseDown$.subscribe(() => {
//   ​ 	  mouseMove$
//   ​ 	  .pipe(
//   ​ 	    map(event => {
//   ​ 	      event.preventDefault();
//   ​ 	      ​return​ {
//   ​ 	        x: event.clientX,
//   ​ 	        y: event.clientY
//   ​ 	      };
//   ​ 	    }),
//   ​ 	    takeUntil(mouseUp$)
//   ​ 	  )
//   ​ 	  .subscribe(pos => {
//   ​ 	    ​// Draggable is absolutely positioned​
//   ​ 	    this.draggable.style.left = pos.x + ​'px'​;
//   ​ 	    this.draggable.style.top = pos.y + ​'px'​;
//   ​ 	  });
//   ​ 	});

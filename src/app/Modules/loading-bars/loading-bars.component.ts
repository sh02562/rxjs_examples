import { Component, OnInit } from '@angular/core';
import { Observable, timer, fromEvent, interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { map, takeUntil } from 'rxjs/operators';
import { element } from 'protractor';

@Component({
  selector: 'app-loading-bars',
  templateUrl: './loading-bars.component.html',
  styleUrls: ['./loading-bars.component.scss']
})
export class LoadingBarsComponent implements OnInit {

  startButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
  width1: any = 0;
  width: any = 0;

  constructor() { }

  ngOnInit(): void {

    // Loading Bar without buttons
    timer(0, 100).pipe(
      takeWhile(() =>
        this.isWidthWithinLimit()
      ))
      .subscribe(() => {
        this.width = this.width + 1;
        console.log(this.width);
      })

    // Loading Bar with buttons
    this.startButton = document.querySelector('#start-button');
    this.stopButton = document.querySelector('#stop-button');

    let startClick$ = fromEvent(this.startButton, 'click');
    let stopClick$ = fromEvent(this.stopButton, 'click');
    let tenthSecond$ = interval(100);

    console.log("startClick$ = ", startClick$);
    console.log("stopClick$ = ", stopClick$);
    console.log("this.startButton = ", this.startButton);
    console.log("this.stopButton = ", this.stopButton);

    startClick$.subscribe(() => {
      tenthSecond$
        .pipe(
          map(item => (item / 20)),
          takeUntil(stopClick$)
        )
        .subscribe(() => {
          this.width1 <= 100 ? this.width1 = this.width1 + 2 : '';
          console.log("this.width = ", this.width1)
        });
    });
  }

  // Loading Bar without buttons function call
  isWidthWithinLimit() {
    if (this.width === 100) {
      return false;
    } else {
      return true;
    }
  }
}

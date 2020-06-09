import { Component, OnInit } from '@angular/core';
import { interval, fromEvent } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.scss']
})
export class StopWatchComponent implements OnInit {

  startButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
  resultsArea: HTMLElement;
  clearButton: HTMLButtonElement;
  value: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.startButton = document.querySelector('#start-button') as HTMLButtonElement;
    this.stopButton = document.querySelector('#stop-button');
    this.clearButton = document.querySelector('#clear-button');
    this.resultsArea = document.querySelector<HTMLElement>('.output');
    let tenthSecond$ = interval(100);
    let startClick$ = fromEvent(this.startButton, 'click');
    let stopClick$ = fromEvent(this.stopButton, 'click');
    let clearClick$ = fromEvent(this.clearButton, 'click');

    startClick$.subscribe(() => {
      tenthSecond$
        .pipe(
          map(item => (item / 10)),
          takeUntil(stopClick$)
        )
        .subscribe(num => { this.resultsArea.innerText = num + 's' });
    });
    clearClick$.subscribe(() => { this.resultsArea.innerText = "0" });
  }
}

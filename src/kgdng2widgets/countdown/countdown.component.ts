import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'kgd-countdown',
  template: `
    <div class="kgd-countdown" *ngIf="targetDate && !done">
      <span *ngIf="days">{{ days }}d</span> 
      <span *ngIf="hours">{{ hours }}h</span> 
      <span *ngIf="minutes">{{ minutes }}m</span> 
      <span *ngIf="seconds">{{ seconds }}s</span>
    </div>

  `,
  styles: [`
    .kgd-countdown {
        padding: 6px;
        background-color: rgba(77, 83, 89, 1);
        border-radius: 4px;
        display: inline-block;
        box-shadow: 3px 3px 5px black;
        span {
            color: rgba(241, 228, 232, 1);
            font-weight: bold;
            letter-spacing: 2px;
            text-shadow: 1px 1px 5px gray;
            background-color: rgba(40,46,52,1);
            padding: 6px;
            border-radius: inherit;
        }
    }
  `]
})
export class CountdownComponent implements OnInit {

  private intervalID: number;

  /**
   * If should auto start counting defaults to true
   */
  @Input()
  private autoStart: boolean = true;

  @Input()
  private targetDate: Date;

  @Output()
  public onDone: EventEmitter<{}> = new EventEmitter();

  public get done(): boolean {
    return this._done;
  }
  private  _done: boolean = false;

  public get days(): number {
    return this._days;
  }
  private _days: number;

  public get hours(): number {
    return this._hours;
  }
  private _hours: number;

  public get minutes(): number {
    return this._minutes;
  }
  private _minutes: number;

  public get seconds(): number {
    return this._seconds;
  }
  private _seconds: number;

  constructor() { }

  public ngOnInit() {
    if (!(this.targetDate instanceof Date)) {
      throw new Error('targetDate MUST be defined, and MUST be a Date object');
    }

    if (this.autoStart) {
      this.startCounter();
    }
  }

  /**
   * Starts counting only if not already started
   * 
   * @author Kevin Guanche Darias
   */
  public startCounter(): void {
    if (!this.intervalID) {
      this.intervalID = window.setInterval(() => this.counterRun(), 1000);
    }
  }

  /**
   * Stops the counter, if running
   * 
   * @author Kevin Guanche Darias
   */
  public stopCounter(): void {
    if (this.intervalID) {
      window.clearInterval(this.intervalID);
      this.intervalID = null;
    }
  }

  /**
   * Updates the time fields, sets the counter as done when appropiate
   * 
   * @author Kevin Guanche Darias
   */
  private counterRun(): void {
    let now = new Date();
    let unixTime = new Date(Math.abs( this.targetDate.getTime() - now.getTime()));
    if (now > this.targetDate ) {
      this._done = true;
      this.stopCounter();
      this.onDone.emit();
    }else {
      this._days = Math.floor((unixTime.getTime() / 1000) / 86400);
      this._hours = unixTime.getUTCHours();
      this._minutes = unixTime.getUTCMinutes();
      this._seconds = unixTime.getUTCSeconds();
    }

  }
}

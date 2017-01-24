import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kgd-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  public dateWithMinutesAndSeconds: Date;
  public dateWithOneAboutToEndDay: Date;
  public ngOnInit() {
    let now = new Date();
    this.dateWithMinutesAndSeconds = new Date(now.getTime() + 3600000);
    this.dateWithOneAboutToEndDay = new Date(now.getTime() + 86410000);
  }
}
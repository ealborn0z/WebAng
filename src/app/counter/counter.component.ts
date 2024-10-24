import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter', // Este es el nombre que usarás en el HTML
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() counterDescription: string = '';
  @Input() projectsCompleted: number = 0;
  @Input() projectsSupports: number = 0;
  @Input() websiteCompletedTitle: string = '';
  @Input() websiteSupportsTitle: string = '';

  countCompleted: number = 0; 
  countSupports: number = 0;

  ngOnInit() {
    this.startCounter(1);
    this.startCounter(2);
  }

  startCounter(counter: number) {
    let count = 0;
    const target = counter === 1 ? this.projectsCompleted : this.projectsSupports;
    const interval = setInterval(() => {
      if (count < target) {
        count++;
        if (counter === 1) {
          this.countCompleted = count;
        } else {
          this.countSupports = count;
        }
      } else {
        clearInterval(interval);
      }
    }, 20);
  }
}
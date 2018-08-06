import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.scss']
})
export class FigureComponent implements OnInit {
  @Input() type = 1;

  constructor() { }

  ngOnInit() {
  }

}

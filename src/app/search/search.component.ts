import { Component, Input, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  animations: [
    trigger('appearDisappear', [
      state('invisible', style({
        transform: 'scaleX(0)',
        color: 'red'
      })),
      state('visible', style({
        transform: 'scaleX(1)',
      })),
      transition('visible <=> invisible', [
        animate('0.5s')
      ])
    ]),
  ],
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input()
  isVisible : boolean = false;

  constructor() {
  }

  ngOnInit(): void { }
}

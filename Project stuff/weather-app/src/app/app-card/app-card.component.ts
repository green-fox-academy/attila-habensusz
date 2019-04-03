import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.css']
})
export class AppCardComponent implements OnInit {
  data = {
    cities: [
    "Seattle",
    "Miami",
    "Barcelona",
    "London",
    "Budapest"
    ],
    location: [
      "Washington, United States",
      "Florida, United States",
      "Spain",
      "United Kingdom",
      "Hungary"
    ],
    temperature: [
      11,
      33,
      19,
      4,
      12
    ]
    
  }

  constructor() { }

  ngOnInit() {
  }

}

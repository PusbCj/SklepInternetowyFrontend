import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  rangeValues: number[] = [0, 500];
  constructor() { }

  ngOnInit(): void {
  }

}

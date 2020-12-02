import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  rangeValues: number[] = [0, 500];
  constructor(private route: ActivatedRoute) { }
  catID = '';

  ngOnInit(): void {
    this.catID = this.route.snapshot.paramMap.get('id');
  }

}

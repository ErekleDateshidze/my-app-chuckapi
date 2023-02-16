import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
 
  @Input() categories:string[] |null= []

  constructor(){}

  ngOnInit(): void {
    
  }
}

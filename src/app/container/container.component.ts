import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChuckApiService } from '../chuck-api.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  categories$: Observable<string[]>=this.apiService.getCategories();

  constructor(private apiService: ChuckApiService){}

  ngOnInit(): void {
    
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Observable, switchMap } from 'rxjs';
import { ChuckApiService } from '../chuck-api.service';
import { Joke, QueryResult } from '../chuck.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search=new FormControl();

  result$: Observable<QueryResult> | undefined;

  constructor(private apiService:ChuckApiService){}

  addToList(joke:Joke) {
    this.apiService.saveJoke(joke).subscribe(c => console.log(c))
  }

  ngOnInit(): void {
    this.result$ = this.search.valueChanges
    .pipe(debounceTime(500) , 
    distinctUntilChanged(), 
    switchMap(query => this.apiService.searchJoke(query)))
  };
}

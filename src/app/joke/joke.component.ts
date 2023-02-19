import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ChuckApiService } from '../chuck-api.service';
import { Joke } from '../chuck.model';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  constructor( private activatedRpute:ActivatedRoute, private apiService:ChuckApiService) {}

  joke$: Observable<Joke | null> | undefined 

  addTolist(joke:Joke) {
    this.apiService.saveJoke(joke).subscribe(() => console.log('Joke has been added'))
  }

  ngOnInit(): void {
    const category = this.activatedRpute.snapshot.paramMap.get('category');

    if(category) {
      this.joke$= this.apiService.getCategoryJoke(category).pipe(catchError((error:HttpErrorResponse) => {
        console.log('Error',error.status)
        if(error.status ===404) {
          // this.toastr.error('Not Found Error')
        }
        return of(null);
      }));
    }   
  }
}

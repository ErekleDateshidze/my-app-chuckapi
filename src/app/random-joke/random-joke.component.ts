import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChuckApiService } from '../chuck-api.service';
import { Joke } from '../chuck.model';

@Component({
  selector: 'app-random-joke',
  templateUrl: './random-joke.component.html',
  styleUrls: ['./random-joke.component.scss']
})
export class RandomJokeComponent implements OnInit {
  
  joke$: Observable<Joke> |undefined = this.api.getRandomJoke()

  constructor(private api: ChuckApiService) {}

  ngOnInit(): void {}
}

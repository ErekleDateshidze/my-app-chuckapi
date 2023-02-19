import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Joke, QueryResult } from './chuck.model';
import { API_BASE } from './tokens';

// const API_BASE = 'https://api.chucknorris.io/jokes'

@Injectable({
  providedIn: 'root'
})
export class ChuckApiService {
  constructor(private http: HttpClient , @Inject(API_BASE) private apiBase:string) {}

 getRandomJoke(): Observable<Joke> {
    return this.http.get<Joke>(`${ this.apiBase}/random`);
  }


  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${ this.apiBase}/categories`);
  }

  getCategoryJoke(category:string): Observable<Joke>  {
    const params= new HttpParams().set('category', category);

    return this.http.get<Joke>(`${ this.apiBase}/random` , {
      params
    });
  }

   searchJoke(query: string): Observable<QueryResult> {
    const params = new HttpParams().set('query', query);

    return this.http.get<QueryResult>(`${this.apiBase}/search`, {
      params,
    });
  }

  getSavedJokeList() {
    return this.http.get<Joke[]>(`${environment.jsonServerBase}/jokes`)
  }

  saveJoke(joke:Joke) {
    return this.http.post(`${environment.jsonServerBase}/jokes`,joke)
  } 

  editJoke(id:string , joke:Joke) {
    return this.http.patch(`${environment.jsonServerBase}/jokes/${id}`,joke)
  }

  deleteJoke(id:string) {
    return this.http.delete(`${environment.jsonServerBase}/jokes/${id}`)
  }

}

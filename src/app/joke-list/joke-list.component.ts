import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChuckApiService } from '../chuck-api.service';
import { Joke } from '../chuck.model';


@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit{
  jokesList$ = this.apiService.getSavedJokeList();

  selectedJokeId:string | undefined;

  // isEditMode=false;

  @ViewChild('input') input: ElementRef |undefined

  constructor(private apiService:ChuckApiService){}

  deleteJoke(id:string) {
    this.apiService.deleteJoke(id).subscribe(() => {
      console.log('JOke deleted')
      this.jokesList$=this.apiService.getSavedJokeList();
    })
  }

  enterEdit(id:string) {
    this.selectedJokeId=id;
  }

  edit(joke:Joke) {
    const value =this.input?.nativeElement.value

    this.apiService.editJoke(joke.id , {
      ...joke,
      value
    }).subscribe(() => {
      console.log('edited')
      this.cancelEdit();
      this.jokesList$ = this.apiService.getSavedJokeList();
    })
  }

  cancelEdit() {
    this.selectedJokeId=undefined;
  }
  
  ngOnInit(): void {

  }
}

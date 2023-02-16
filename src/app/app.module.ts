import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomJokeComponent } from './random-joke/random-joke.component';
import { CategoriesComponent } from './categories/categories.component';
import { JokeComponent } from './joke/joke.component';
import { ContainerComponent } from './container/container.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { environment } from 'src/environments/environment';
import { API_BASE } from './tokens';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RandomJokeComponent,
    CategoriesComponent,
    JokeComponent,
    ContainerComponent,
    JokeListComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    {
      provide: API_BASE, 
      useValue:environment.apiBase,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './src/components/header/header.component';
import { HomesComponent } from './src/components/homes/homes.component';
import { MatchQuizComponent } from './src/components/match-quiz/match-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomesComponent,
    MatchQuizComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

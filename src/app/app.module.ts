import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {QuizModule} from './quiz/quiz.module';

import {CommunicationsService} from './services/core/communications.service'


@NgModule({
  declarations: [ 
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    QuizModule
  ],
  providers: [CommunicationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

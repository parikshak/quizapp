import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { QuizComponent } from './quiz.component';
import { ReviewComponent } from './review/review.component';

import { CoreModule } from '../core/core.module';
import { QuestionComponent } from './question/question.component';

import {QuestionFilterPipe} from '../directives/question-filter.pipe';


const routes: Routes = [ 
  { path: 'quiz', component: QuizComponent},
  { path: '', component: QuizComponent}
];


@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  declarations: [ReviewComponent, QuizComponent, QuestionComponent,QuestionFilterPipe]
})
export class QuizModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { QuizComponent } from './quiz.component';
import { ReviewComponent } from './review/review.component';

import { CoreModule } from '../core/core.module';
import { QuestionComponent } from './question/question.component';

import {QuestionFilterPipe} from '../directives/question-filter.pipe';

import { SlickModule } from 'ngx-slick';
import { UserListComponent } from './user-list/user-list.component';
import { ResultComponent } from './result/result.component';
const routes: Routes = [
  { path: 'quiz', component: QuizComponent },
  { path: '', component: QuizComponent },
  { path: 'user-lists', component: UserListComponent },
  { path: 'result', component: ResultComponent },
];


@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    RouterModule.forChild(routes),
    SlickModule.forRoot()
  ],
  exports:[RouterModule],
  declarations: [ReviewComponent, QuizComponent, QuestionComponent,QuestionFilterPipe, UserListComponent, ResultComponent]
})
export class QuizModule { }

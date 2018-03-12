import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz.component';
import { ReviewComponent } from './review/review.component';

import { CoreModule } from '../core/core.module';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  { path: 'quiz', component: QuizComponent},
  { path: '', component: QuizComponent}
];


@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  declarations: [ReviewComponent, QuizComponent, QuestionComponent]
})
export class QuizModule { }

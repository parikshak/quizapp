import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz.component';
import { ReviewComponent } from './review/review.component';

import {CoreModule} from '../core/core.module'

const routes: Routes = [
  { path: 'quiz', component: QuizComponent}
];


@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  declarations: [ReviewComponent, QuizComponent]
})
export class QuizModule { }

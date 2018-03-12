import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  { path: 'quiz', component: QuizComponent,}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  declarations: [ReviewComponent, QuizComponent]
})
export class QuizModule { }

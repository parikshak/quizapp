import { Pipe, PipeTransform } from '@angular/core';
import { query } from '@angular/core/src/animation/dsl';
import { read } from 'fs';

@Pipe({
  name: 'questionFilter'
})
export class QuestionFilterPipe implements PipeTransform {

  transform(questions: any, input: any) {
    if (input) {
       return questions.filter(function (el: any) {
          return el.selected == false;
        });
    }
    return questions;
  }

}

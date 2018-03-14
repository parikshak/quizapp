import { Pipe, PipeTransform } from '@angular/core';
import { query } from '@angular/core/src/animation/dsl';

@Pipe({
  name: 'questionFilter'
})
export class QuestionFilterPipe implements PipeTransform {

  transform(questions: any, input: any) {
    if (input) {
      return questions.filter(function (el: any) {
        return el.value == '' || !el.value;
      });
    }
    return questions;
  }

}

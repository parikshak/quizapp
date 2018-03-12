import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {HeaderComponent} from '../core/header/header.component'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions: any[];
  selectedPartIndex: number;
  selectedQuestionIndex: number;
  public items = [
    {name :'vaibhav',selected:true},
    {name :'vaibhav',selected:true},
    {name :'vaibhav',selected:true},
    {name :'vaibhav',selected:false},
    {name :'vaibhav',selected:true},
    {name :'vaibhav',selected:true},
    {name :'vaibhav',selected:false},
    {name :'vaibhav',selected:true},
    {name :'vaibhav',selected:true},
    {name :'vaibhav',selected:true},
    {name :'vaibhav',selected:false},
    {name :'vaibhav',selected:false},
    {name :'vaibhav',selected:false},
    {name :'vaibhav',selected:true},
    {name :'vaibhav',selected:true},
    {name :'vaibhav',selected:true},
    {name :'vaibhav',selected:true},
    {name :'vaibhav',selected:true},
    {name :'vaibhav',selected:false},
    {name :'vaibhav',selected:true},
    {name :'vaibhav',selected:true},
    {name :'vaibhav',selected:true},
    {name :'vaibhav',selected:true},
    {name :'vaibhav',selected:true} 
  ];
  public qustionCount : number;

  constructor() {
    this.qustionCount =  this.items.length;
    this.questions = [{
      "id": "1", 
      "heading": "Sample part 1 heading", 
      "question": [{
        "title": "Sample Question in part 1", 
        "answers": {
          "answer": [{
            "@label": "Option answer 1", 
            "@value": "J"
          }, {
            "@label": "Option answer 2", 
            "@value": "P"
          }]
        }
      },{
        "title": "Sample Question2 in part 1", 
        "answers": {
          "answer": [{
            "@label": "Option answer 1", 
            "@value": "J"
          }, {
            "@label": "Option answer 2", 
            "@value": "P"
          }]
        }
      }]
    },{
      "id": "2", 
      "heading": "Sample part 2 heading", 
      "question": [{
        "title": "Sample Question in part 2", 
        "answers": {
          "answer": [{
            "@label": "Option answer 1", 
            "@value": "J"
          }, {
            "@label": "Option answer 2", 
            "@value": "P"
          }]
        }
      }]
    }];
    this.selectedPartIndex = 0;
    this.selectedQuestionIndex = 0;
  }

  ngOnInit() {

  }

  loadNextQuestion() {
    var currentPartQuesCount = this.questions[this.selectedPartIndex].question.length - 1
    if(this.selectedQuestionIndex === currentPartQuesCount ) {
      if (this.selectedPartIndex === (this.questions.length - 1)) {
        // load review function
      } else {
        this.selectedPartIndex = this.selectedPartIndex + 1;
        this.selectedQuestionIndex = 0;
      }
    } else {
      this.selectedQuestionIndex = this.selectedQuestionIndex + 1;
    }
  }

  loadPrevQuestion() {
    if(this.selectedQuestionIndex === 0 ) {
      this.selectedPartIndex = this.selectedPartIndex - 1;
      this.selectedQuestionIndex = this.questions[this.selectedPartIndex].question.length - 1;
    } else {
      this.selectedQuestionIndex = this.selectedQuestionIndex - 1;
    }
  }
  nonSelected() {
     return !this.items.every(function(item:any) {
       return item.selected == true;
    })
  }

}

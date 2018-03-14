import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CommunicationsService} from '../services/core/communications.service';
import {HeaderComponent} from '../core/header/header.component'
import { debug } from 'util';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  
  public isShown : boolean;
  public currentIndex : number;
  public countOfQuestion : number;
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

  constructor(private _communications : CommunicationsService ) {
    this.qustionCount =  this.items.length;
    this.questions = [{
      "id": "1", 
      "heading": "Sample part 1 heading", 
      "question": [{
        "title": "Sample Question in part 1", 
        "answers": {
          "answer": [{
            "@label": "Option answer 1.1", 
            "@value": "J"
          }, {
            "@label": "Option answer 1.2", 
            "@value": "P"
          }]
        }
      },{
        "title": "Sample Question2 in part 1", 
        "answers": {
          "answer": [{
            "@label": "Option answer 2.1", 
            "@value": "J"
          }, {
            "@label": "Option answer 2.2", 
            "@value": "P"
          }]
        }
      },{
        "title": "Sample Question3 in part 1", 
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
    this.countOfQuestion = 0;
    this.currentIndex = 1;
  }

  ngOnInit() {
    this._communications.currentToggle.subscribe(value => this.isShown = value);
    this.numberOfQuestion();
  }

  numberOfQuestion() {
    this.questions.forEach(question => {
      var len = $.map(question.question, function(n, i) { return i; }).length;
      this.countOfQuestion += len;
    });
    // console.log(this.questionCount);
  }

  loadNextQuestion() {
    var currentPartQuesCount = this.questions[this.selectedPartIndex].question.length - 1;
    if(this.selectedQuestionIndex === currentPartQuesCount ) {
      if (this.selectedPartIndex === (this.questions.length - 1)) {
        $('.checkbox').trigger('click');
      } else {
        this.selectedPartIndex = this.selectedPartIndex + 1;
        this.selectedQuestionIndex = 0;
        this.currentIndex += 1;
      }
    } else {
      this.selectedQuestionIndex = this.selectedQuestionIndex + 1;
      this.currentIndex += 1;
    }
    console.log(this.questions);
  }

  loadPrevQuestion() {
    if(this.selectedQuestionIndex === 0 ) {
      this.selectedPartIndex = this.selectedPartIndex - 1;
      this.selectedQuestionIndex = this.questions[this.selectedPartIndex].question.length - 1;
    } else {
      this.selectedQuestionIndex = this.selectedQuestionIndex - 1;
    }
    this.currentIndex -= 1;
  }

  showSuccessModal() {
    $('.ui.basic.modal').modal('show');
  }

  changeQuestionIndex(selectedPartIndex:number, selectedQuestionIndex:number) {
    this.selectedPartIndex = selectedPartIndex;
    this.selectedQuestionIndex = selectedQuestionIndex;
  }

  get filteredQuestions(){
    var list: any[] = [];
    this.questions.forEach(question => {
      question.question.map(function(n, i) {  
            list.push(n);
       });
    });
    return list;
  }

  get nonSelected(){
    var keepGoing = true;
    this.questions.forEach(question => {
      question.question.forEach(q =>  {  
        if(keepGoing) {
          if(!q.value || q.value == ''){
            keepGoing = false;
          }
        }
       });
    });
    return keepGoing;
  }

}

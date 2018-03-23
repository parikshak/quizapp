import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
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
  public countOfQuestion : number;
  questions: any[];
  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  slideConfig = {
    "slidesToShow": 1,
     "slidesToScroll": 1,
     infinite: false,
     nextArrow: '<div class="right-icon-container" ><i class="angle right icon right-icon"></i></div>',
        prevArrow: '<div class="left-icon-container"><i class="angle left icon left-icon"></i></div>'
  };
  constructor(
    private _communications : CommunicationsService) {
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
    this.countOfQuestion = 0;
  }

  ngOnInit() {
    this._communications.currentToggle.subscribe(value => this.isShown = value);
    this.numberOfQuestion();
  }

  afterChange(e) {
    let currentSlide = e.currentSlide + 1;
    if(e.slick.slideCount == currentSlide) {
        $('.checkbox').trigger('click');
    }
  }

  numberOfQuestion() {
    this.questions.forEach(question => {
      var len = $.map(question.question, function(n, i) { return i; }).length;
      this.countOfQuestion += len;
    });
  }

  showSuccessModal() { 
    $('.ui.basic.modal').modal('show');
  }

  questionGoTo(slickModal,selectedIndex) : void {
    $(slickModal.$instance).slick('slickGoTo', selectedIndex - 1);
    $('.checkbox').trigger('click');
  }

  get filteredQuestions() {
    var list: any[] = [];
    var index = 1;
    this.questions.forEach(question => {
      question.question.map(function(n, i) {  
            n.heading = question.heading;
            n.index = index++;
            list.push(n); 
       });
    });
    return list;
  }

  get nonSelected() {
   var disabled = true; 
   let mainQuestion = this.questions;
    for (var i = 0;i < mainQuestion.length; i++) {
        let innerQuestion = mainQuestion[i].question;
        if(!disabled){
          break;
        }        
        for(var j = 0;j < innerQuestion.length;j++){
           if(!innerQuestion[j].value){
             disabled = false;
             break;
           }
        }
    }
    return disabled;
  }

}

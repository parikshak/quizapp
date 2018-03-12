import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() questionObj: any;
  constructor() {}

  ngOnInit() {
    this.questionObj['value'] = !!this.questionObj['value'] ? this.questionObj['value'] : ""  
  }

  onSelectionChange(answer) {
    this.questionObj['value'] = answer; 
  }

}

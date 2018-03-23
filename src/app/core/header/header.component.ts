import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import {CommunicationsService} from '../../services/core/communications.service';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isToggle : boolean;
  constructor(
    private _communication : CommunicationsService,
    private router: Router
  ) { }
  
  ngOnInit() {
    this._communication.currentToggle.subscribe(value => this.isToggle = value);
    $('#accountTab.dropdown')
        .dropdown({
            on: 'hover'
        })
  }

  toggleButton(){
    let value = !this.isToggle;
    this._communication.changeToggleSource(value);
  }

}

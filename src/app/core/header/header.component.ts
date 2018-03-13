import { Component, OnInit } from '@angular/core';
import {CommunicationsService} from '../../services/core/communications.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isToggle : boolean;
  constructor(private _communication : CommunicationsService) { }
  
  ngOnInit() {
    this._communication.currentToggle.subscribe(value => this.isToggle = value);
  }

  toggleButton(){
    let value = !this.isToggle;
    this._communication.changeToggleSource(value);
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {CONSTANTS} from '../../constants/constants';

@Component({
  selector: 'app-card-station',
  templateUrl: './card-station.component.html',
  styleUrls: ['./card-station.component.scss'],
})
export class CardStationComponent implements OnInit {

  constants = CONSTANTS;

  @Input() stations;

  constructor() {
  }

  ngOnInit() {
  }

}

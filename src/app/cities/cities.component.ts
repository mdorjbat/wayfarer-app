import {Component, Input, OnInit} from '@angular/core';
// import {CITIES} from '../cities-list';
import {City} from '../city';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import {CITIES} from '../CITIES';
import {WeatherComponent} from '../weather/weather.component';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities: any = CITIES;
  scaleXY = 'scale(' + .5 + ',' + .5 + ')';

  @Input() index: number;
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
  }


}

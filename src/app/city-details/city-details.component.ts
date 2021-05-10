import {Component, Input, OnInit} from '@angular/core';
import {CITIES} from '../CITIES';
import {ActivatedRoute} from '@angular/router';
import {CitiesComponent} from '../cities/cities.component';
import {WeatherComponent} from '../weather/weather.component';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit {
  cities: any = CITIES;
  city: any;


  constructor(private route: ActivatedRoute) { }
  @Input() index: number;
  ngOnInit(): void {
    this.route.paramMap
      .subscribe
        (params => {
          this.city = CITIES.find(city => {
            return city.id === +params.get('id');
          });
        });
    console.log(this.city);
  }

}

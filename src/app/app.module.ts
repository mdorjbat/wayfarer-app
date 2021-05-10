import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatCarouselModule } from '@ngmodule/material-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { CitiesComponent } from './cities/cities.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import {FormsModule} from '@angular/forms';
import { CityDetailsComponent } from './city-details/city-details.component';
import { PostComponent } from './post/post.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CitiesComponent,
    CarouselComponent,
    CityDetailsComponent,
    PostComponent,
    WeatherComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatCarouselModule,
        NgbModule,
        FormsModule,
        // RouterModule.forRoot([
        //   {path: 'sf', component: CityDetailsComponent},
        // ]),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

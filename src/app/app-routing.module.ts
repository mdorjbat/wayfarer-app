import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CitiesComponent} from './cities/cities.component';
import {AppComponent} from './app.component';
import {CityDetailsComponent} from './city-details/city-details.component';
import {CarouselComponent} from './carousel/carousel.component';
import {PostComponent} from './post/post.component';
// const routes: Routes = [
//   // {path: '', component: CarouselComponent},
//   {path: 'cities', component: CitiesComponent, children: [
//       {path: ':id', component: CityDetailsComponent}
//     ]},
// ];

const routes: Routes = [{
  path: '',
  component: CarouselComponent
},
  {
    path: 'cities',
    component: CitiesComponent,
    children: [
      {
        path: ':id',
        component: CityDetailsComponent
      },
      {
        path: ':id/posts/:postId',
        component: PostComponent
      }
    ]
  },
  // {
  //   path: 'links',
  //   component: LinksComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './app/shared/pages/home-page/home-page.component';
import { AboutPagesComponent } from './app/shared/pages/about-pages/about-pages.component';
import { ContactComponent } from './app/shared/pages/contact-pages/contact.component';
import { CountriesModule } from './app/countries/countries.module';

const routes: Routes = [
// {
//  path : '',
//  component: HomePageComponent
// },
{
 path : 'about',
 component: AboutPagesComponent
},
{
 path : 'contact',
 component: ContactComponent
},
{
 path : 'countries',
loadChildren: () => import('./app/countries/countries.module').then(m => m.CountriesModule)
},
{
 path : '**',
 redirectTo: 'countries'
},
];

@NgModule({

  imports:[
    RouterModule.forRoot(routes),
  ],
  exports: [
  RouterModule
]

})
export class AppRoutingModule { }

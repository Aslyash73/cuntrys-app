import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit{


  public country?: Country;


  constructor (

    private CountriesService: CountriesService,

    private activatedRoutr: ActivatedRoute,

    private router: Router

 ) {}

  ngOnInit(): void {

    this.activatedRoutr.params
    .pipe(
        switchMap( ({id }) => this.CountriesService.searchCountryByAlphaCode(id) )
      )
    .subscribe(country => {

      if(!country) return this.router.navigateByUrl('');

      return this.country = country;


    });
  }

}

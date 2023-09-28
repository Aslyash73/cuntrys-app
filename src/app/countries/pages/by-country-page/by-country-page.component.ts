import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'by-country',
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {

  public countriesC: Country[]=[];

    constructor(private CountriesService: CountriesService){}

      searchByCountry(term: string): void{
      this.CountriesService.searchCountry(term)
      .subscribe(countries => {
        this.countriesC = countries;
      })

    }




}

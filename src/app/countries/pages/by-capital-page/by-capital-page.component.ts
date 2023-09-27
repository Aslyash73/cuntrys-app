import { Component} from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'by-capital',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

  public countries: Country[]=[];

   constructor(private CountriesService: CountriesService){}

  searchByCapital(term: string): void{
    this.CountriesService.searchCapital(term)
    .subscribe(countries => {
      this.countries = countries;

})

  }

}

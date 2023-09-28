import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'by-region',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

   public countriesC: Country[]=[];

    constructor(private CountriesService: CountriesService){}

      searchByRegion(region: string): void{
      this.CountriesService.searchRegion(region)
      .subscribe(countries => {
        this.countriesC = countries;
      })

    }

}

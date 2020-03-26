import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css'],
  providers:[CountryService]
})
export class RegistryComponent implements OnInit {

  public keyword = "name"; //JSON attribute name

  data:any = [];

  constructor(private http: CountryService) { }

  loadCountries(){
    this.data = [];
    this.http.getAllCountries().subscribe(
      data => {
      this.data = data;
      console.log(this.data)
    });
  }

  onCountryChanged(value:string){
    console.log('Selected country is:' + value);
  }

  ngOnInit() {
    this.loadCountries();
  }

}

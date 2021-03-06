import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';
import { Observable } from 'rxjs';
import { CountryModel } from '../models/country.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css'],
  providers: [CountryService]
})

export class RegistryComponent implements OnInit {

  public keyword = "name"; //JSON attribute name
  dropZoneActive: boolean = false;
  cName:string;
  imgSrc:any;
  _customer = {} as Customer;

  data: CountryModel.ICountry[] = [];

  constructor(private http: CountryService, private sanitizer: DomSanitizer) { }

  dropZoneState($event: boolean) {
    this.dropZoneActive = $event;
    //console.log(this.dropZoneActive)
  }

  imageDropped(event: any){
    //console.log("Evento recibido de la directiva:", event);
    this.imgSrc = event ;
    //this.imageDrop.nativeElement.appendChild(event);
  }

  loadCountries() {
    //this.data = [];
    this.http.getAllCountries().subscribe(
      data => {
        this.data = data;
        //console.log(this.data)
      });
  }

  onCountryChanged(value: string) {
    this._customer.country = value;
  }

  ngOnInit() {
    this.loadCountries();
  }

  resetImage(){
    this.dropZoneActive = false;
    this.imgSrc = '';
  }

  createAccount(){
    console.log(this._customer);
  }

}

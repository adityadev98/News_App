import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  searchData = new Subject<any>();
  categoryFilter = new Subject<any>();
  countryFilter = new Subject<any>();
  sourceFilter = new Subject<any>();
  DateFilter = new Subject<any>();

  constructor() { }
}

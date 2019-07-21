import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RequestOptions, Headers } from '@angular/http';
import "rxjs/Rx";

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {

  constructor( private _http: Http ) { }

  get feachProjectData(){
    return this._http.get('./assets/data/project-list.json');
  }

}

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export  class WeatherService {
  constructor(private http: Http) {
  }

  searchCity(pattern: string): Observable<any> {
    let headers = new Headers({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
      'Access-Control-Allow-Credentials': true
    });

    let url = `https://www.yahoo.com/news/_td/api/resource/WeatherSearch;text=${pattern}?bkt=%5B%22news-d-202%22%2C%22newsdmcntr%22%5D&device=desktop
    &feature=cacheContentCanvas%2CvideoDocking%2CnewContentAttribution%2Clivecoverage%2Cfeaturebar%2CdeferModalCluster%2Cc2sGa%2CnewLayout
    %2Csidepic%2CcanvassOffnet%2CntkFilmstrip%2CautoNotif&intl=us&lang=en-US&partner=none&prid=32q4t5dcq6c2e&region=US&site=fp&tz=America
    %2FLos_Angeles&ver=2.0.9120004&returnMeta=true`;
    console.log(headers);
    return this.http.get(url, new RequestOptions({headers: headers}));
  }

  getWeather(city: string): Observable<any> {
    let url = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo
    .places(1)%20where%20text%3D%22${city}%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;
    return this.http.get(url);
  }
}

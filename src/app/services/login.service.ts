import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TimeSpotService } from './time-spot.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  result: any;
  name: any;

  constructor(private http: HttpClient, private spotService: TimeSpotService) { }



  login(obj){
     return this.http.post(environment.URL+ 'api/Accounts', obj);
  }


  getToken(){
    return this.result;
  }
}

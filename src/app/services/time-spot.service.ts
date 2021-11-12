import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimeSpotService {

  constructor(private http: HttpClient) { }



  getTimeSheet(jwt) {
    let httpHeaders = new HttpHeaders({
      'Authorization': "Bearer " + jwt
    });



    return this.http.get(environment.URL + 'api/Timesheet', { headers: httpHeaders });
  }



  postTimeSheet(jwt) {
    let httpHeaders = new HttpHeaders({
      'Authorization': "Bearer " + jwt
    });

    let UNIX = Date.now();
    
    return this.http.post(environment.URL + 'api/Timesheet', UNIX, { headers: httpHeaders });
  }


  deleteTimeSheet(jwt, id) {
    let httpHeaders = new HttpHeaders({
      'Authorization': "Bearer " + jwt
    });

    return this.http.delete(environment.URL + 'api/Timesheet/' + id, { headers: httpHeaders });
  }
}

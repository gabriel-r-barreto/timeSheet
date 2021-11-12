import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { TimeSpotService } from '../services/time-spot.service';

@Component({
  selector: 'app-spot',
  templateUrl: './spot.page.html',
  styleUrls: ['./spot.page.scss'],
})
export class SpotPage implements OnInit {
  localdate: string;
  data: Object;
  name: any;

  constructor(private timeSheetService: TimeSpotService, private loginService: LoginService, private router: Router) { }
  currentDate: string = new Date().toLocaleDateString();
  ngOnInit() {
    this.getTimeSheet();
    this.getTime()
  }

  getTimeSheet() {
    const i = this.loginService.getToken();
    this.name = this.loginService.name;

    this.timeSheetService.getTimeSheet(i).subscribe(result => {
      //@ts-ignore
      this.data = result.items;
    })
  
  }



  creatTimeSheet(){
    const i = this.loginService.getToken();
    this.timeSheetService.postTimeSheet(i).subscribe(result => {
      this.getTimeSheet()
    })

   
  }

  removeTimeSheet(time){
    const i = this.loginService.getToken();
    this.timeSheetService.deleteTimeSheet(i, time.id).subscribe(result => {
     
    })

    this.getTimeSheet();
  }

  getTime() {
    var dNow = new Date();
    this.localdate = dNow.getHours() + ':' + dNow.getMinutes() + ':' + dNow.getSeconds();
    setTimeout(()=>{                     
      this.getTime();
 }, 1000);
  }

  logout(){
    this.router.navigate(['/home']);
  }
}

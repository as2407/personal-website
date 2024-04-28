import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  url: string = 'assets/details.json';
  details:any = null;
  homeDetails:any = null;

  lottieOptions: any = {
    path: 'assets/lottie/landingPerson2.json', // Path to your Lottie animation JSON file
    renderer: 'svg', // Use 'svg' or 'canvas' depending on your preference
    loop: true, // Set to true if you want the animation to loop
    autoplay: true, // Set to true if you want the animation to play automatically
  };

  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      this.details = res;
      this.homeDetails = this.details.homesection;
    });
  }

}

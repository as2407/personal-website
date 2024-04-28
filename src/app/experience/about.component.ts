import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private http: HttpClient) { }
  url: string = 'assets/details.json';
  details:any;
  aboutDetails:any;
  skills: string[] = [];

  lottieOptions: any = {
    path: 'assets/lottie/codingPerson2.json', // Path to your Lottie animation JSON file
    renderer: 'svg', // Use 'svg' or 'canvas' depending on your preference
    loop: true, // Set to true if you want the animation to loop
    autoplay: true, // Set to true if you want the animation to play automatically
  };

  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      this.details = res;
      this.aboutDetails = this.details.aboutsection;
      this.skills = this.aboutDetails.skills;
    });
  }


}

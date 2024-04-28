import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  url: string = 'assets/details.json';
  details:any;
  certificationDetails:any

  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      this.details = res;
      this.certificationDetails = this.details.certificationsection;
    });
  }

}

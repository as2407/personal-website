import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  url: string = 'assets/details.json';
  details:any;
  projectDetails:any

  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      this.details = res;
      this.projectDetails = this.details.projectsection;
    });
  }

  goTogitHub(url:string) {
    window.open(url, '_blank')
    // window.location.href = url
  }

  downloadApk(url:string) {
    window.open(url, '_blank')
    // window.location.href = url
  }

}

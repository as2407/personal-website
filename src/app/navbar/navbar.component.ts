import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) { }
  navActive: string = ""
  night: boolean = false
  nightButtonText: string = "🌙  Dark"
  navBar: any;
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.navBar = this.document.getElementById('navbar');
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  activateLightMode() {
    this.night = false
    this.nightButtonText = "🌙  Dark"
    this.document.body.classList.remove("night-mode");
    this.document.body.classList.add("light-mode");
    this.navBar?.classList.remove("night-mode");
    this.navBar?.classList.add("light-mode");
  }

  activateNightMode() {
    this.night = true
    this.nightButtonText = "☀️  Light"
    this.document.body.classList.remove("light-mode");
    this.document.body.classList.add("night-mode");
    this.navBar?.classList.remove("light-mode");
    this.navBar?.classList.add("night-mode");
  }

  goToHome() {
    this.router.navigate(['/']).then(r => {
      this.navActive = ''
    });
  }

  goToAbout() {
    this.router.navigate(['/experience']).then(r => {
      this.navActive = 'experience'
    });
  }

  goToProjects() {
    this.router.navigate(['/projects']).then(r => {
      this.navActive = 'projects'
    });
  }

  goToCertifications() {
    this.router.navigate(['/education']).then(r => {
      this.navActive = 'education'
    });
  }

}

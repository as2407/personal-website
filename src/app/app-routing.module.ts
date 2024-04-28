import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './experience/about.component';
import { CertificationsComponent } from './education/certifications.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"experience", component:AboutComponent},
  {path:"projects", component:ProjectsComponent},
  {path:"education", component:CertificationsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const components = [HomeComponent, AboutComponent, CertificationsComponent,ProjectsComponent];

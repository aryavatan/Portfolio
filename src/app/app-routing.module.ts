import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { ExperienceComponent } from './experience/experience.component';
// import { ProjectsComponent } from './projects/projects.component';
// import { ProjectDetailsComponent } from './project-details/project-details.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    // { path: 'experience', component: ExperienceComponent },
    // { path: 'projects', component: ProjectsComponent },
    // { path: 'projects/:id', component: ProjectDetailsComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

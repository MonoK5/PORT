import { Routes } from '@angular/router';
import { LandingComponent } from './Pages /landing/landing.component';
import { AboutComponent } from './Pages /about/about.component';
import { ContactComponent } from './Pages /contact/contact.component';
import { SkillsComponent } from './Pages /skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
{ path: '', component: LandingComponent },
{ path: 'about', component: AboutComponent },
{ path: 'contact', component: ContactComponent},
{ path: 'skills', component: SkillsComponent},
{ path: 'projects', component: ProjectsComponent}

];

import { Component } from '@angular/core';
import { NavComponent } from '../Pages /nav/nav.component';
import { FooterComponent } from '../Pages /footer/footer.component';

@Component({
  selector: 'app-projects',
  imports: [NavComponent,FooterComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}

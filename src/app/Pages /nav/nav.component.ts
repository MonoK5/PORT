import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  
  toggleMenu(): void {
    const menu = document.querySelector('click');
    menu?.classList.toggle('hidden');
  }
}



import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {



scrollTo(section: string) {
  document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
}

}

import { Component } from '@angular/core';

@Component({
  selector: 'spa-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  cadastroUsuario(): void {
    console.log('call cadastroUsuario');
  }
}

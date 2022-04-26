import { Router } from '@angular/router';
import { UsuarioService } from './usuario.service';
import { Usuario } from './model/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-list-usuario',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css'],
})
export class UsuarioListComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private service: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.usuarios = this.service.getUsuarios();
  }

  excluir(usuario: Usuario): void {
    this.service.excluir(usuario);
    this.router.navigate(['/usuarios']);
  }
}

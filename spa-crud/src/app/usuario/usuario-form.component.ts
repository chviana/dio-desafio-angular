import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Usuario } from './model/usuario';
import { UsuarioService } from './usuario.service';

@Component({
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css'],
})
export class UsuarioFormComponent implements OnInit {
  usuario!: Usuario;
  isNew: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UsuarioService
  ) {}

  ngOnInit(): void {
    this.getUsuarioById();
  }

  getUsuarioById(): void {
    const usuario = this.service.getUsuarioById(
      +this.route.snapshot.paramMap.get('id')!
    );
    if (usuario) {
      this.usuario = usuario;
    } else {
      this.usuario = new Usuario();
      this.isNew = true;
    }
  }

  salvar(form: NgForm): void {
    this.usuario = { ...this.usuario, ...form.value };
    this.service.salvar(this.usuario);
    this.router.navigate(['/usuarios']);
  }

  cancelar(): void {
    this.router.navigate(['/usuarios']);
  }
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../angular-material/material.module';
import { UsuarioFormComponent } from './usuario-form.component';
import { UsuarioListComponent } from './usuario-list.component';
import { UsuarioComponent } from './usuario.component';

@NgModule({
  declarations: [UsuarioComponent, UsuarioListComponent, UsuarioFormComponent],
  imports: [
    RouterModule.forChild([
      { path: 'usuarios', component: UsuarioComponent },
      { path: 'usuarios/edit/:id', component: UsuarioFormComponent },
      { path: 'usuarios/new', component: UsuarioFormComponent },
    ]),
    MaterialModule,
    CommonModule,
    FormsModule,
  ],
  exports: [UsuarioComponent, UsuarioListComponent, UsuarioFormComponent],
})
export class UsuarioModule {}

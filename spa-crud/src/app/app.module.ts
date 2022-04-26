import { UsuarioFormComponent } from './usuario/usuario-form.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UsuarioModule } from './usuario/usuario.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
      { path: 'usuarios/new', component: UsuarioFormComponent },
    ]),
    CoreModule,
    UsuarioModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

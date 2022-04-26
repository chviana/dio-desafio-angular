import { NgModule } from '@angular/core';

import { MaterialModule } from '../angular-material/material.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [MaterialModule],
  exports: [NavbarComponent],
})
export class CoreModule {}

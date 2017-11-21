import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// Components
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [],
  exports: [NavComponent, HomeComponent],
  declarations: [NavComponent, HomeComponent],
  providers: []
})

export class CoreModule {}

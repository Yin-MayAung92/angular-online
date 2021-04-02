import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertiesComponent } from './properties/properties.component';

const routes: Routes = [
  {path:"",component:InterpolationComponent},
  {path:"props",component:PropertiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

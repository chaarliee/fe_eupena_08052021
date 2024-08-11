import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamComponent } from './stream.component';
import { RouterModule } from '@angular/router';


export const routes = [
  { path: "", redirectTo: "stream", pathMatch: "full" },
  {
    path: "",component: StreamComponent,
  }
]

@NgModule({
  declarations: [
    StreamComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class StreamModule { }

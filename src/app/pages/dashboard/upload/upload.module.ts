import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import { RouterModule } from '@angular/router';


export const routes = [
  { path: "", redirectTo: "upload", pathMatch: "full" },
  {
    path: "",component: UploadComponent,
  }
]
@NgModule({
  declarations: [
    UploadComponent 
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class UploadModule { }

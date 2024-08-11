import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from 'src/app/theme/component/menu/menu.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { StreamComponent } from './stream/stream.component';



export const routes = [
  {
    path: "", component: DashboardComponent,
    children: [
       { path: "", redirectTo: "home", pathMatch: "full" },
       {
         path: "home", loadChildren: () => import('./home/home.module').then( m => m.HomeModule) 
          // canLoad: [AuthenticationGuard],
       },
      {
        path: "upload",loadChildren: () => import('./upload/upload.module').then( m => m.UploadModule)
        // canLoad: [AuthenticationGuard],
      },
      {
        path: "stream",loadChildren: () => import('./stream/stream.module').then( m => m.StreamModule)
        // canLoad: [AuthenticationGuard],
      },
    ],
  },
];
@NgModule({
  declarations: [
    DashboardComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    // SharedModule,
  ],
  
})
export class DashboardModule { }

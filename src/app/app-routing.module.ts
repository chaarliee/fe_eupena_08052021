import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';



const routes: Routes = [
  // { path: '', component: DashboardComponent },
  { path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then (a => a.DashboardModule) },
 

  // { path: 'error', component: ErrorComponent, },
  // { path: '**', component: NotFoundComponent }
 
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [
      RouterModule.forRoot(routes, {
          preloadingStrategy: PreloadAllModules, // <- comment this line for activate lazy load
          relativeLinkResolution: 'legacy',
          // useHash: true
      })
  ],
  exports: [
      RouterModule
  ]

})
export class AppRoutingModule { }

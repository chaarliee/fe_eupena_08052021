import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { StreamComponent } from './pages/stream/stream.component';
import { UploadComponent } from './pages/upload/upload.component';

const routes: Routes = [
  { path: '',component: HomeComponent },
  { path: 'stream', component: StreamComponent },
  { path: 'upload', component: UploadComponent },

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

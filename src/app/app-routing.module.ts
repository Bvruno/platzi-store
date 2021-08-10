import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component'
import { DemoComponent } from './demo/demo.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        redirectTo: '/home' ,
        pathMatch:'full',
      },
      {
        path: 'home',
        //canActivate: [AdminGuard],
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'order',
        //canActivate: [AdminGuard],
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
      },
      {
        path: 'contact',
        //canActivate: [AdminGuard],
        component: ContactComponent
      },
      {
        path: 'demo',
        component: DemoComponent
      },
    ]
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

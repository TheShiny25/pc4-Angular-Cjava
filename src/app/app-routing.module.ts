import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'empresa',component:EmpresaComponent},
  {path: 'productos',component:ProductosComponent},
  {path: 'contacto',component:ContactenosComponent},
  {path: '**',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

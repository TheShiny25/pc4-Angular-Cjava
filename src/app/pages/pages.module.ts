import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { ComponentsModule } from '../components/components.module';
import { EmpresaComponent } from './empresa/empresa.component';
import { ProductosComponent } from './productos/productos.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactenosComponent,
    EmpresaComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }

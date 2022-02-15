import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoCriarComponent } from './components/produto-criar/produto-criar.component';

import { HomeComponent } from './views/home/home.component'
import { ProdutoCrudComponent } from './views/produto-crud/produto-crud.component'

const routes: Routes = [{
  path: "",
  component: HomeComponent

},
{
  path: "produtos",
  component: ProdutoCrudComponent
},
{
  path: "products/create",
  component: ProdutoCriarComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

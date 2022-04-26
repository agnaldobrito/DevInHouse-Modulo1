import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex1LoginComponent } from './ex1-login/ex1-login.component';
import { Ex2BuscaComponent } from './ex2-busca/ex2-busca.component';
import { Ex3CalculoComponent } from './ex3-calculo/ex3-calculo.component';
import { Ex4FormComponent } from './ex4-form/ex4-form.component';
import { Ex5ValidatorComponent } from './ex5-validator/ex5-validator.component';
import { Ex6APIComponent } from './ex6-api/ex6-api.component';
import { Ex7ApiServiceComponent } from './ex7-api-service/ex7-api-service.component';
import { Ex8LoadingComponent } from './ex8-loading/ex8-loading.component';
import { Ex9PopularComponent } from './ex9-popular/ex9-popular.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'ex1',
    pathMatch: 'full'
  },
  {
    path:'ex1',
    component:Ex1LoginComponent
  },
  {
    path:'ex2',
    component: Ex2BuscaComponent
  },
  {
    path:'ex3',
    component:Ex3CalculoComponent
  },
  {
    path:'ex4',
    component:Ex4FormComponent
  },
  {
    path:'ex5',
    component:Ex5ValidatorComponent
  },
  {
    path:'ex6',
    component:Ex6APIComponent
  },
  {
    path:'ex7',
    component:Ex7ApiServiceComponent

  },
  {
    path:'ex8',
    component:Ex8LoadingComponent

  },
  {
    path:'ex9',
    component:Ex9PopularComponent

  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

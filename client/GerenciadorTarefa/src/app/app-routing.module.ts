import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaListarComponent } from './tarefa/listar/tarefa-listar/tarefa-listar.component';
const routes: Routes = [
  { path: 'tarefa/listar', component: TarefaListarComponent, pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

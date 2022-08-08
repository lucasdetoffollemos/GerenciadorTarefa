import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaListarComponent } from './tarefa/listar/tarefa-listar/tarefa-listar.component';
const routes: Routes = [
  { path: '', redirectTo: 'tarefa/listar', pathMatch: 'full' },
  { path: 'tarefa/listar', component: TarefaListarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

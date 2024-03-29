import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaCriarComponent } from './tarefa/criar/tarefa-criar.component';
import { TarefaDetalhesComponent } from './tarefa/detalhes/tarefa-detalhes.component';
import { TarefaEditarComponent } from './tarefa/editar/tarefa-editar.component';
import { TarefaListarComponent } from './tarefa/listar/tarefa-listar.component';
const routes: Routes = [
  { path: '', redirectTo: 'tarefa/listar', pathMatch: 'full' },
  { path: 'tarefa/listar', component: TarefaListarComponent},
  { path: 'tarefa/criar', component: TarefaCriarComponent},
  { path: 'tarefa/detalhes/:id', component: TarefaDetalhesComponent},
  { path: 'tarefa/editar/:id', component: TarefaEditarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

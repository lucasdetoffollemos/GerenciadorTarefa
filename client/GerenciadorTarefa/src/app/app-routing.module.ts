import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaCriarComponent } from './tarefa/criar/tarefa-criar.component';
import { TarefaListarComponent } from './tarefa/listar/tarefa-listar.component';
const routes: Routes = [
  { path: '', redirectTo: 'tarefa/listar', pathMatch: 'full' },
  { path: 'tarefa/listar', component: TarefaListarComponent},
  { path: 'tarefa/criar', component: TarefaCriarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

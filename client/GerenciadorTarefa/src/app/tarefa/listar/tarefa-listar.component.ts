import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IHttpTarefaService } from 'src/app/shared/interfaces/ihttp-tarefa-service';
import { TarefaListViewModel } from 'src/app/shared/viewModels/tarefa/tarefa-list-view-model';

@Component({
  selector: 'app-tarefa-listar',
  templateUrl: './tarefa-listar.component.html',
})
export class TarefaListarComponent implements OnInit {

  
  listaTarefas: TarefaListViewModel[];

  constructor(private router: Router, @Inject('IHttpTarefaServiceToken') private servicoTarefa: IHttpTarefaService) { }
 
  ngOnInit(): void {
    this.obterTarefas();
  }

  obterTarefas(): void {
    this.servicoTarefa.obterTarefas()
      .subscribe(tarefas => {
        this.listaTarefas = tarefas;
        //this.atualizarFuncionarios();
      });
  }
 
}

import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IHttpTarefaService } from 'src/app/shared/interfaces/ihttp-tarefa-service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { TarefaListViewModel } from 'src/app/shared/viewModels/tarefa/tarefa-list-view-model';

@Component({
  selector: 'app-tarefa-listar',
  templateUrl: './tarefa-listar.component.html',
})
export class TarefaListarComponent implements OnInit {

  
  listaTarefas: TarefaListViewModel[];
  listaTarefasTotal: TarefaListViewModel[];
  page = 1;
  pageSize = 5;
  collectionSize = 0;
  tarefaSelecionada: any;

  constructor(private router: Router, @Inject('IHttpTarefaServiceToken') private servicoTarefa: IHttpTarefaService,  private servicoModal: NgbModal, private toastService: ToastService) { }
 
  ngOnInit(): void {
    this.obterTarefas();
   
  }

  obterTarefas(): void {
    this.servicoTarefa.obterTarefas()
      .subscribe(tarefas => {
        this.listaTarefasTotal = tarefas;
        this.atualizarTarefas();
      });

  }

  atualizarTarefas() {
    this.listaTarefas = this.listaTarefasTotal
    //.map((tarefa, i) => ({ u: i + 1, ...tarefa }))
    .sort((a,b) => a.id - b.id)
    .slice((this.page-1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  
    this.collectionSize = this.listaTarefasTotal.length;
  }

  abreviarDescricao(descricao:string): string {
    if(descricao.length > 10){
      return descricao.substring(0,9).trim() + "...";
    }
    return descricao;
  }

  setarStatus(status: boolean): string{
    if(status == false){
      return 'Em andamento';
    }
    return 'Concluida';
  }

  //01/01/0001
  //0001-01-01T00:00:00
  verificaSeTarefaFoiEditada(data: Date){
    let dataEdicao = data.toString()
    let dataMinima = '0001-01-01T00:00:00';

    if(dataEdicao == dataMinima){
      return 'Tarefa não editada';
    }
    
    return data;
  }


  //0001-01-01T00:00:00
  //1753-01-01T00:00:00
  verificaSeTarefaFoiConcluida(data: Date){
    let dataEdicao = data.toString()
    let dataMinima1 = '0001-01-01T00:00:00';
    let dataMinima2 = '1753-01-01T00:00:00';

    if(dataEdicao == dataMinima1 || dataEdicao == dataMinima2){
      return 'Tarefa não concluída';
    }
    
    return data;
  }

  abrirConfirmacao(modal: any) {
    this.servicoModal.open(modal).result.then((resultado) => {
      if (resultado == 'Excluir') {
        this.servicoTarefa.excluirTarefa(this.tarefaSelecionada)
        .subscribe(() =>{
            this.toastService.show('Tarefa removida com sucesso', {classname: 'bg-success text-light', delay: 5000});
            setTimeout(()=> {
              //passando uma url diferente da que eu vou navegar
              this.router.navigateByUrl('tarefa/criar', { skipLocationChange: true }).then(() => {
                //aqui será a url onde eu vou irs
                this.router.navigate(['tarefa/listar']);
              })
          }, 2000)

        },
        erro => {
          let mensagemErro = '';
          for(let nomeErro in erro.error.errors){
            mensagemErro += erro.error.errors[nomeErro];
          }
          console.log(mensagemErro)
          this.toastService.show('Erro ao remover tarefa. '+ mensagemErro , {classname: 'bg-danger text-light', delay: 5000});
        }
        );
      }
      }).catch(erro => erro);
  }
 
}

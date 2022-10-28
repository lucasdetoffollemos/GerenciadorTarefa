import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IHttpTarefaService } from 'src/app/shared/interfaces/ihttp-tarefa-service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { TarefaCreateViewModel } from 'src/app/shared/viewModels/tarefa/tarefa-create-view-model';

@Component({
  selector: 'app-tarefa-criar',
  templateUrl: './tarefa-criar.component.html'
})
export class TarefaCriarComponent implements OnInit {

  cadastroForm: FormGroup;
  tarefa: TarefaCreateViewModel;

  constructor(@Inject('IHttpTarefaServiceToken') private servicoTarefa: IHttpTarefaService, private router: Router, private toastService: ToastService) { }

  ngOnInit(): void {
    this.cadastroForm = new FormGroup({
      titulo: new FormControl(''),
      descricao: new FormControl('')
    });
  }

  adicionarTarefa() {
      this.tarefa = Object.assign({}, this.tarefa, this.cadastroForm.value);
      console.log('antes de entrar no servico')
      this.servicoTarefa.adicionarTarefas(this.tarefa)
      .subscribe(
        tarefa => {
          this.toastService.show('Tarefa ' + tarefa.titulo + ' adicionada com sucesso!',
            { classname: 'bg-success text-light', delay: 5000 });
            //console.log('Tarefa adicionada com sucesso', tarefa.titulo, tarefa.descricao)
          setTimeout(() => {
            this.router.navigate(['tarefa/listar']);
          }, 2000);
        },
        erro => {
          let mensagemErro = '';
          for(let nomeErro in erro.error.errors){
            mensagemErro += erro.error.errors[nomeErro];
          }
          this.toastService.show('Erro ao adicionar tarefa: ' + mensagemErro,
            { classname: 'bg-danger text-light', delay: 5000 });
        });
  }

  cancelar(): void{
    this.router.navigate(['tarefa/listar']);
  }

}

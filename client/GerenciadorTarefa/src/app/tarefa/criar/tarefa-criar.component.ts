import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IHttpTarefaService } from 'src/app/shared/interfaces/ihttp-tarefa-service';
import { TarefaCreateViewModel } from 'src/app/shared/viewModels/tarefa/tarefa-create-view-model';

@Component({
  selector: 'app-tarefa-criar',
  templateUrl: './tarefa-criar.component.html'
})
export class TarefaCriarComponent implements OnInit {

  cadastroForm: FormGroup;
  tarefa: TarefaCreateViewModel;

  constructor(@Inject('IHttpTarefaServiceToken') private servicoTarefa: IHttpTarefaService, private router: Router) { }

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
          /*this.toastService.show('Funcionario ' + funcionario.nome + ' adicionado com sucesso!',
            { classname: 'bg-success text-light', delay: 5000 });*/
            console.log('Tarefa adicionada com sucesso', tarefa.titulo, tarefa.descricao)
          setTimeout(() => {
            this.router.navigate(['tarefa/listar']);
          }, 5000);
        },
        erro => {
          for(let nomeErro in erro.error.errors){
            const mensagemErro = erro.error.errors[nomeErro];
            /*this.toastService.show('Erro ao adicionario funcionario: ' + mensagemErro,
            { classname: 'bg-danger text-light', delay: 5000 });*/
            console.log('Erro ao adicionario funcionario: ' + mensagemErro)
          }
        });
  }

  cancelar(): void{
    this.router.navigate(['tarefa/listar']);
  }

}

import { formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IHttpTarefaService } from 'src/app/shared/interfaces/ihttp-tarefa-service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { TarefaDetailsViewModel } from 'src/app/shared/viewModels/tarefa/tarefa-details-view-model';
import { TarefaEditViewModel } from 'src/app/shared/viewModels/tarefa/tarefa-edit-view-model';

@Component({
  selector: 'app-editar',
  templateUrl: './tarefa-editar.component.html',
  styleUrls: ['tarefa-editar.component.scss'],
})
export class TarefaEditarComponent implements OnInit {
  
  selected: boolean = false;
  sub: any;
  id: any;
  inputTypeDataEdicao:any;
  inputTypeDataConclusao:any;
  tarefa: TarefaDetailsViewModel;
  tarefaEdit: TarefaEditViewModel;
  cadastroForm: FormGroup;




  constructor(private _Activatedroute: ActivatedRoute, @Inject('IHttpTarefaServiceToken') private servicoTarefa: IHttpTarefaService, private router: Router, private toastService:ToastService) { }

  ngOnInit(): void {

   

    //public int Id { get; set; }
//public string Titulo { get; set; }
//public string Descricao { get; set; }
//public DateTime DataCriacao { get; set; }
//public DateTime DataEdicao { get; set; }
//public DateTime DataConclusao { get; set; }
//public bool Status { get; set; }
    this.id = this._Activatedroute.snapshot.paramMap.get("id");

    this.cadastroForm = new FormGroup({
      titulo: new FormControl(''),
      descricao: new FormControl(''),
      status: new FormControl('')
    });

    this.carregarTarefa();
  }

  carregarTarefa() {
    this.servicoTarefa.obterTarefaPorId(this.id)
      .subscribe((tarefa: TarefaDetailsViewModel) => {
        this.carregarFormulario(tarefa);
      });
  }

  carregarFormulario(tarefa: TarefaDetailsViewModel) {
    this.cadastroForm = new FormGroup({
      titulo: new FormControl(tarefa.titulo),
      descricao: new FormControl(tarefa.descricao),
      status: new FormControl(this.carregarStatus(tarefa.status))
    });

  
    this.tarefa = tarefa;  
  }

  carregarStatus(status: boolean){
    let switchElement = document.getElementById('switch') as HTMLInputElement;
    if(status){
      switchElement.checked = true;
    }
    else{
      switchElement.checked = false;
    }
    
  }

  setarStatus(): boolean{
    let switchElement = document.getElementById('switch') as HTMLInputElement;
    if(switchElement.checked){
      return true;
    }

    return false;
  }


  atualizarTarefa() {
    
    if(this.cadastroForm.valid){

      this.tarefaEdit = Object.assign({}, this.tarefa, this.cadastroForm.value);
      this.tarefaEdit.id = this.id;
      this.tarefaEdit.status = this.setarStatus();
      this.servicoTarefa.editarTarefa(this.tarefaEdit)
      .subscribe(
        tarefa => {
          this.toastService.show('Funcionario ' + tarefa.titulo + ' editada com sucesso!',
            { classname: 'bg-success text-light', delay: 3000 });
          setTimeout(() => {
            this.router.navigate(['tarefa/listar']);
          }, 3000);
        },
        erro => {
          for(let nomeErro in erro.error.errors){
            const mensagemErro = erro.error.errors[nomeErro];
            this.toastService.show('Erro ao editar tarefa: ' + mensagemErro,
            { classname: 'bg-danger text-light', delay: 5000 });
          }
        });
    }
    
  }

  cancelar(): void{
    this.router.navigate(['tarefa/listar']);
  }


}

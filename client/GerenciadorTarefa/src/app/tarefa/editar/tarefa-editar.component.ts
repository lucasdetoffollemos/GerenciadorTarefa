import { formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IHttpTarefaService } from 'src/app/shared/interfaces/ihttp-tarefa-service';
import { ToastService } from 'src/app/shared/services/toast.service';
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
  tarefa: TarefaEditViewModel;
  cadastroForm: FormGroup;
  status: string;



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
      .subscribe((tarefa: TarefaEditViewModel) => {
        this.carregarFormulario(tarefa);
      });
  }

  carregarFormulario(tarefa: TarefaEditViewModel) {
    this.cadastroForm = new FormGroup({
      titulo: new FormControl(tarefa.titulo),
      descricao: new FormControl(tarefa.descricao),
      status: new FormControl(this.setarStatus(tarefa.status))
    });

    this.tarefa = tarefa;  
  }

  setarStatus(status: boolean): string{
    if(status == false){
      this.status = 'Em andamento';
      return this.status;
    }
    this.status = 'Concluida'
    return this.status;
  }

  cancelar(): void{
    this.router.navigate(['tarefa/listar']);
  }


}

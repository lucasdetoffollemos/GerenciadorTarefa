import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IHttpTarefaService } from 'src/app/shared/interfaces/ihttp-tarefa-service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { TarefaDetailsViewModel } from 'src/app/shared/viewModels/tarefa/tarefa-details-view-model';

@Component({
  selector: 'app-tarefa-detalhes',
  templateUrl: './tarefa-detalhes.component.html'
})
export class TarefaDetalhesComponent implements OnInit {

  sub: any;
  id: any;
  funcionario: TarefaDetailsViewModel;
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
      id: new FormControl(''),
      titulo: new FormControl(''),
      descricao: new FormControl(''),
      dataCriacao: new FormControl(''),
      dataEdicao: new FormControl(''),
      dataConclusao: new FormControl(''),
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

     //public int Id { get; set; }
//public string Titulo { get; set; }
//public string Descricao { get; set; }
//public DateTime DataCriacao { get; set; }
//public DateTime DataEdicao { get; set; }
//public DateTime DataConclusao { get; set; }
//public bool Status { get; set; }
    this.cadastroForm = new FormGroup({
      id: new FormControl(tarefa.id),
      titulo: new FormControl(tarefa.titulo),
      descricao: new FormControl(tarefa.descricao),
      dataCriacao:new FormControl(tarefa.dataCriacao),
      dataEdicao: new FormControl(tarefa.dataEdicao),
      dataConclusao: new FormControl(tarefa.dataConclusao),
      status: new FormControl(tarefa.status)
    });
  }

  voltar(): void {
    this.router.navigate(['tarefa/listar']);
  }

}

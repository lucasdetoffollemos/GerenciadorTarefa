import { DatePipe, formatDate } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgControl } from '@angular/forms';
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
  inputTypeDataEdicao:any;
  inputTypeDataConclusao:any;
  tarefa: TarefaDetailsViewModel;
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
      dataCriacao: new FormControl(formatDate(tarefa.dataCriacao,'yyyy-MM-dd','en')),
      dataEdicao: new FormControl(this.verificaSeTarefaFoiEditada(formatDate(tarefa.dataEdicao,'yyyy-MM-dd', 'en'))),
      dataConclusao: new FormControl(this.verificaSeTarefaFoiConcluida(formatDate(tarefa.dataConclusao,'yyyy-MM-dd','en'))),
      status: new FormControl(this.setarStatus(tarefa.status))
    });

    this.tarefa = tarefa;

    
  }

  voltar(): void {
    this.router.navigate(['tarefa/listar']);
  }

  setarStatus(status: boolean): string{
    if(status == false){
      return 'Em andamento';
    }
    return 'Concluida';
  }

  verificaSeTarefaFoiEditada(data: string){
    let dataEdicao = data.toString()
    let dataMinima = '0001-01-01';
    this.inputTypeDataEdicao = 'date'
    if(dataEdicao == dataMinima){
      this.inputTypeDataEdicao = 'text'
      return 'Tarefa não editada';
    }
    
    return data;
  }

  verificaSeTarefaFoiConcluida(data: string){
    let dataEdicao = data.toString()
    let dataMinima1 = '0001-01-01';
    let dataMinima2 = '1753-01-01';
    this.inputTypeDataConclusao = 'date'
    if(dataEdicao == dataMinima1 || dataEdicao == dataMinima2){
      this.inputTypeDataConclusao = 'text'
      return 'Tarefa não concluída';
    }
    
    return data;
  }




}

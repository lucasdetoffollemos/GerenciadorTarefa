import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IHttpTarefaService } from 'src/app/shared/interfaces/ihttp-tarefa-service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { TarefaEditViewModel } from 'src/app/shared/viewModels/tarefa/tarefa-edit-view-model';

@Component({
  selector: 'app-editar',
  templateUrl: './tarefa-editar.component.html'
})
export class EditarComponent implements OnInit {

  sub: any;
  id: any;
  tarefa: TarefaEditViewModel;
  cadastroForm: FormGroup;

  constructor(private _Activatedroute: ActivatedRoute, @Inject('IHttpTarefaServiceToken') private servicoTarefa: IHttpTarefaService, private router: Router, private toastService:ToastService) { }

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
    this.cadastroForm = new FormGroup({
      id: new FormControl(''),
      
    });
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHttpTarefaService } from 'src/app/shared/interfaces/ihttp-tarefa-service';
import { TarefaCreateViewModel } from 'src/app/shared/viewModels/tarefa/tarefa-create-view-model';
import { TarefaDetailsViewModel } from 'src/app/shared/viewModels/tarefa/tarefa-details-view-model';
import { TarefaEditViewModel } from 'src/app/shared/viewModels/tarefa/tarefa-edit-view-model';
import { TarefaListViewModel } from 'src/app/shared/viewModels/tarefa/tarefa-list-view-model';

@Injectable({
  providedIn: 'root'
})
export class HttpTarefaService implements IHttpTarefaService {

  private urlApi = 'https://localhost:5001/api/tarefa';

  constructor(private http: HttpClient) { }

  adicionarTarefas(tarefa: TarefaCreateViewModel): Observable<TarefaCreateViewModel> {
    return this.http.post<TarefaCreateViewModel>(this.urlApi, tarefa);
  }

  obterTarefas(): Observable<TarefaListViewModel[]> {
    return this.http.get<TarefaListViewModel[]>(this.urlApi);
  }

  excluirTarefa(id: number): Observable<number> {
    return this.http.delete<number>(this.urlApi+"/"+id);
  }

  obterTarefaPorId(tarefaId: number): Observable<TarefaDetailsViewModel> {
    return this.http.get<TarefaDetailsViewModel>(this.urlApi+"/"+tarefaId);
  }

  editarTarefa(tarefa: TarefaEditViewModel): Observable<TarefaEditViewModel> {
    return this.http.put<TarefaEditViewModel>(this.urlApi, tarefa);
  }
}

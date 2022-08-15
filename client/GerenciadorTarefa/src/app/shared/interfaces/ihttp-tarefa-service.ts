import { Observable } from "rxjs";
import { TarefaCreateViewModel } from "../viewModels/tarefa/tarefa-create-view-model";
import { TarefaDetailsViewModel } from "../viewModels/tarefa/tarefa-details-view-model";
import { TarefaEditViewModel } from "../viewModels/tarefa/tarefa-edit-view-model";
import { TarefaListViewModel } from "../viewModels/tarefa/tarefa-list-view-model";

export interface IHttpTarefaService {
    adicionarTarefas(tarefa: TarefaCreateViewModel): Observable<TarefaCreateViewModel>

    obterTarefas(): Observable<TarefaListViewModel[]>

    excluirTarefa(id: number): Observable<number>

    obterTarefaPorId(idTarefa : number): Observable<TarefaDetailsViewModel>

    editarTarefa(tarefa: TarefaEditViewModel): Observable<TarefaEditViewModel>
}

using GerenciadorTarefa.Model;
using System;
using System.Collections.Generic;
using System.Linq;

namespace GerenciadorTarefa.Application
{
    public class TarefaAppService : ITarefaCadastravel
    {
        private readonly IRepositoryTarefa tarefaRepository;

        public TarefaAppService(IRepositoryTarefa tarefaRepository)
        {
            this.tarefaRepository = tarefaRepository;
        }

        public string InserirTarefa(Tarefa t)
        {
            var validator = new TarefaValidator();
            var validRes = validator.Validate(t);

            if (!validRes.IsValid)
            {
                return validRes.Errors.FirstOrDefault().ToString();

            }

            bool existeTitulo = tarefaRepository.MostrarTarefas().Exists(x => x.TituloEhIgual(t.Titulo));

            if (existeTitulo)
            {
                return "Não foi possível cadastrar tarefa, titulo já existente";
            }


            /*if (!t.EhIgualDiaDeSemana())
            {
                return "Não é possível cadastrar tarefas em final de semana!";
            }*/

            var tarefaInserida = tarefaRepository.InserirTarefa(t);

            if (tarefaInserida == false)
            {
                return "Erro na inserção da tarefa;";
            }

            return "Tarefa inserida com sucesso";
        }

        public List<Tarefa> MostrarTarefas()
        {
            return tarefaRepository.MostrarTarefas();
        }

        public Tarefa MostrarTarefa(int id)
        {
            return tarefaRepository.MostrarTarefa(id);
        }

        public string ExcluirTarefa(int id)
        {
            var tarefaId = MostrarTarefas().Exists(x => x.Id == id);
            if (tarefaId == false)
            {
                return "Id Inválido";
            }

            var tarefa = MostrarTarefas().Where(x => x.Id == id).FirstOrDefault();

            if (tarefa.TarefaEstaConcluida() == false)
            {
                return "Tarefa não pode ser excluida, pois ainda não foi concluida";
            }

            var tarefaExcluida = tarefaRepository.ExcluirTarefa(id, tarefa);

            if(tarefaExcluida == false)
            {
                return "Não foi possível excluir a tarefa";
            }

            return "Tarefa excluida com sucesso";

        }

        public string EditarTarefa(int id, Tarefa tarefa)
        {

            var receitaId = MostrarTarefas().Exists(x => x.Id == id);
            if (receitaId == false)
            {
                return "Id Inválido";
            }

            var validator = new TarefaValidator();
            var validRes = validator.Validate(tarefa);

            if (!validRes.IsValid)
            {
                return validRes.Errors.FirstOrDefault().ToString();
            }

            bool existeTitulo = tarefaRepository.MostrarTarefas().Exists(x => x.TituloEhIgual(tarefa.Titulo) && x.Id != id);

            if (existeTitulo)
            {
                return "Não foi possível editar tarefa, titulo já existente";
            }

            tarefa.AtualizarDataEdicao();

            tarefa.AtualizarDataConclusão();

            var tarefaEditada = tarefaRepository.EditarTarefa(id, tarefa);

            if(tarefaEditada == false)
            {
                return "Não foi possível editar a tarefa";
            }

            return "Tarefa editada com sucesso";
            
        }
    }
}

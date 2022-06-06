using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GerenciadorTarefa.Model
{
    public interface IRepositoryTarefa
    {
        bool InserirTarefa(Tarefa t);

        List<Tarefa> MostrarTarefas();

        Tarefa MostrarTarefa(int idPesquisado);

        bool EditarTarefa(int idEncontrado, Tarefa tarefa);

        bool ExcluirTarefa(int id, Tarefa tarefa);
    }
}

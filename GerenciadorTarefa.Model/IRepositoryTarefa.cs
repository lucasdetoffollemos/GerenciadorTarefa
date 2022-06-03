using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GerenciadorTarefa.Model
{
    public interface IRepositoryTarefa
    {
        void InserirTarefa(Tarefa t);

        List<Tarefa> MostrarTarefas();

        Tarefa MostrarTarefa(int id);

        Tarefa EditarTarefa(int id, Tarefa novaTarefa);

        void ExcluirTarefa(int id);
    }
}

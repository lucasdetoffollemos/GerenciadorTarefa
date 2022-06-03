using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GerenciadorTarefa.Model
{
    public interface IRepositoryTarefa
    {
        string InserirTarefa(Tarefa t);

        List<Tarefa> MostrarTarefas();

        Tarefa MostrarTarefa(int idPesquisado);

        string EditarTarefa(int idEncontrado, Tarefa tarefa);

        string ExcluirTarefa(int id);
    }
}

using GerenciadorTarefa.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GerenciadorTarefa.Application
{
    public interface ITarefaCadastravel
    {
        string InserirTarefa(Tarefa t);
        List<Tarefa> MostrarTarefas();
        Tarefa MostrarTarefa(int id);
        string ExcluirTarefa(int id);
        string EditarTarefa(int id, Tarefa tarefa);

    }
}


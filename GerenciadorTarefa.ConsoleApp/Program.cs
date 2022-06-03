using GerenciadorTarefa.Controller;
using GerenciadorTarefa.Model;
using System;
using System.Collections.Generic;

namespace GerenciadorTarefa.ConsoleApp
{
    public class Program
    {
        static void Main(string[] args)
        {
            TarefaController controller = new TarefaController();

            List<Tarefa> tarefas = controller.MostrarTarefas();

            foreach (Tarefa tarefa in tarefas)
            {
                Console.WriteLine(tarefa.Id);
                Console.WriteLine(tarefa.Titulo);
                Console.WriteLine(tarefa.Descricao);
                Console.WriteLine(tarefa.Status);
                Console.WriteLine(tarefa.DataCriacao);
                Console.WriteLine(tarefa.DataEdicao);
                Console.WriteLine(tarefa.DataConclusao);
            }
        }
    }
}

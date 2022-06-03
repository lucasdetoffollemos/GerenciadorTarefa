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

            #region Inserção
            //Tarefa t = new Tarefa();
            //t.Titulo = "Titulo velho";
            //t.Descricao = "Descrição velha";

            //string resultado = controller.InserirTarefa(t);

            //Console.WriteLine(resultado);
            #endregion

            #region Mostrar tarefas
            //List<Tarefa> tarefas = controller.MostrarTarefas();

            //foreach (Tarefa tarefa in tarefas)
            //{
            //    Console.WriteLine("");
            //    Console.WriteLine("Id da tarefa: " + tarefa.Id);
            //    Console.WriteLine("Titulo da tarefa: " + tarefa.Titulo);
            //    Console.WriteLine("Descrição da tarefa: " + tarefa.Descricao);
            //    Console.WriteLine("Status da tarefa: " + tarefa.Status);
            //    Console.WriteLine("Data de tarefa: " + tarefa.DataCriacao.ToString("dd/MM/yyyy"));
            //    Console.WriteLine("Data de edição tarefa: " + tarefa.DataEdicao.ToString("dd/MM/yyyy"));
            //    Console.WriteLine("Data de conclusão da tarefa: " + tarefa.DataConclusao.ToString("dd/MM/yyyy"));
            //    Console.WriteLine("---------------");
            //}
            #endregion

            #region Mostrar tarefa
            //Tarefa tarefaSelecionada = controller.MostrarTarefa(13);
            //if(tarefaSelecionada != null)
            //{
            //    Console.WriteLine("");
            //    Console.WriteLine("Tarefa Selecionada");
            //    Console.WriteLine("Id da tarefa: " + tarefaSelecionada.Id);
            //    Console.WriteLine("Titulo da tarefa: " + tarefaSelecionada.Titulo);
            //    Console.WriteLine("Descrição da tarefa: " + tarefaSelecionada.Descricao);
            //    Console.WriteLine("Status da tarefa: " + tarefaSelecionada.Status);
            //    Console.WriteLine("Data de tarefa: " + tarefaSelecionada.DataCriacao.ToString("dd/MM/yyyy"));
            //    Console.WriteLine("Data de edição tarefa: " + tarefaSelecionada.DataEdicao.ToString("dd/MM/yyyy"));
            //    Console.WriteLine("Data de conclusão da tarefa: " + tarefaSelecionada.DataConclusao.ToString("dd/MM/yyyy"));
            //    Console.WriteLine("---------------");
            //}


            #endregion

            #region Editar Tarefa

            //Tarefa tarefaEditada = new Tarefa();

            //tarefaEditada.Titulo = "Titulo Editado";
            //tarefaEditada.Descricao = "Titulo Editado";
            //tarefaEditada.Status = true;
            //tarefaEditada.DataEdicao = DateTime.Now;
            //tarefaEditada.DataConclusao = DateTime.Now;


            //string resultado = controller.EditarTarefa(2002, tarefaEditada);

            //Console.WriteLine(resultado);
            #endregion

            #region Exclusão
            //string resultado = controller.ExcluirTarefa(1003);
            //Console.WriteLine(resultado);
            #endregion



        }
    }
}

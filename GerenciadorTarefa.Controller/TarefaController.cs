using GerenciadorTarefa.Model;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace GerenciadorTarefa.Controller
{
    public class TarefaController : IRepositoryTarefa
    {
        public static SqlConnection AbrindoConexaoDB()
        {
            string enderecoDBTarefa =
               @"Data Source=(LocalDb)\MSSqlLocalDB;Initial Catalog=DBTarefas;Integrated Security=True;Pooling=False";

            SqlConnection conexaoComBanco = new SqlConnection();
            conexaoComBanco.ConnectionString = enderecoDBTarefa;
            conexaoComBanco.Open();
            return conexaoComBanco;
        }
        public Tarefa EditarTarefa(int id, Tarefa novaTarefa)
        {
            throw new NotImplementedException();
        }

        public void ExcluirTarefa(int id)
        {
            throw new NotImplementedException();
        }

        public void InserirTarefa(Tarefa t)
        {
            throw new NotImplementedException();
        }

        public Tarefa MostrarTarefa(int id)
        {
            throw new NotImplementedException();
        }

        public List<Tarefa> MostrarTarefas()
        {
            SqlConnection conexaoComBanco = AbrindoConexaoDB();

            SqlCommand comandoSelecao = new SqlCommand();
            comandoSelecao.Connection = conexaoComBanco;

            string sqlSelecao =
                @"SELECT 
                        ID,
                        TITULO,
                        DESCRICAO,
                        DATACRIACAO,
                        DATAEDICAO,
                        DATACONCLUSAO,
                        STATUS
                    FROM 
                        TBTAREFA
                    ";


            comandoSelecao.CommandText = sqlSelecao;

            SqlDataReader leitorTarefas = comandoSelecao.ExecuteReader();

            List<Tarefa> tarefas = new List<Tarefa>();

            while (leitorTarefas.Read())
            {
                int id = Convert.ToInt32(leitorTarefas["ID"]);
                string descricao = Convert.ToString(leitorTarefas["DESCRICAO"]);
                string titulo = Convert.ToString(leitorTarefas["TITULO"]);
                bool status= Convert.ToBoolean(leitorTarefas["STATUS"]);
                DateTime dataCriacao = Convert.ToDateTime(leitorTarefas["DATACRIACAO"]);
                DateTime dataEdicao = Convert.ToDateTime(leitorTarefas["DATAEDICAO"]);
                DateTime dataConclusao = Convert.ToDateTime(leitorTarefas["DATACONCLUSAO"]);


                Tarefa tarefa = new Tarefa();

                tarefa.Id = id;
                tarefa.Titulo = titulo;
                tarefa.Descricao = descricao;
                tarefa.Status = status;
                tarefa.DataCriacao = dataCriacao;
                tarefa.DataEdicao = dataEdicao;
                tarefa.DataConclusao = dataConclusao;

                tarefas.Add(tarefa);
            }

            conexaoComBanco.Close();

            return tarefas;
        }
    }
}

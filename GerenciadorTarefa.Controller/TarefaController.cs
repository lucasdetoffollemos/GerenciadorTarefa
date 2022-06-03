using GerenciadorTarefa.Model;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

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


        public string InserirTarefa(Tarefa t)
        {

            var validator = new TarefaValidator();
            var validRes = validator.Validate(t);

            if (!validRes.IsValid)
            {
                return validRes.Errors.FirstOrDefault().ToString();

            }
            SqlConnection conexaoComBanco = AbrindoConexaoDB();

            SqlCommand comandoInsercao = new SqlCommand();
            comandoInsercao.Connection = conexaoComBanco;

            string sqlInsercao =
                @"INSERT INTO TBTAREFA
                    (
                        [TITULO],
                        [DESCRICAO],
                        [STATUS],
                        [DATACRIACAO]
                    ) 
                    VALUES
                    (
                        @TITULO,
                        @DESCRICAO,
                        @STATUS,
                        @DATACRIACAO
                    );";

            sqlInsercao +=
                @"SELECT SCOPE_IDENTITY();";

            comandoInsercao.CommandText = sqlInsercao;

            comandoInsercao.Parameters.AddWithValue("TITULO", t.Titulo);
            comandoInsercao.Parameters.AddWithValue("DESCRICAO", t.Descricao);
            comandoInsercao.Parameters.AddWithValue("STATUS", t.Status);
            comandoInsercao.Parameters.AddWithValue("DATACRIACAO", t.DataCriacao);

            object id = comandoInsercao.ExecuteScalar();

            t.Id = Convert.ToInt32(id);

            conexaoComBanco.Close();

            return "Tarefa inserida com sucesso";
        }

        public string EditarTarefa(int idEncontrado, Tarefa tarefa)
        {
            string resultado;
            var validator = new TarefaValidator();
            var validRes = validator.Validate(tarefa);

            if (!validRes.IsValid)
            {
                resultado = validRes.Errors.FirstOrDefault().ToString();
                return resultado;
            }


            var receitaId = MostrarTarefas().Exists(x => x.Id == idEncontrado);
            if (receitaId == false)
            {
                resultado = "Id Inválido";
                return resultado;
            }

            SqlConnection conexaoComBanco = AbrindoConexaoDB();

            SqlCommand comandoAtualizacao = new SqlCommand();
            comandoAtualizacao.Connection = conexaoComBanco;

            string sqlAtualizacao =
                @"UPDATE TBTAREFA
	                SET	
		                [TITULO] = @TITULO,
                        [DESCRICAO] = @DESCRICAO,
                        [DATACRIACAO] = @DATACRIACAO,
                        [DATAEDICAO] = @DATAEDICAO,
                        [DATACONCLUSAO] = @DATACONCLUSAO,
                        [STATUS] = @STATUS
	                WHERE 
		                [ID] = @ID";

            comandoAtualizacao.CommandText = sqlAtualizacao;

            comandoAtualizacao.Parameters.AddWithValue("ID", idEncontrado);
            comandoAtualizacao.Parameters.AddWithValue("TITULO", tarefa.Titulo);
            comandoAtualizacao.Parameters.AddWithValue("DESCRICAO", tarefa.Descricao);
            comandoAtualizacao.Parameters.AddWithValue("DATACRIACAO", tarefa.DataCriacao);
            comandoAtualizacao.Parameters.AddWithValue("DATAEDICAO", tarefa.DataEdicao);
            comandoAtualizacao.Parameters.AddWithValue("DATACONCLUSAO", tarefa.DataConclusao);
            comandoAtualizacao.Parameters.AddWithValue("STATUS", tarefa.Status);
            comandoAtualizacao.ExecuteNonQuery();

            conexaoComBanco.Close();

            resultado = "Tarefa modificada com sucesso";
            return resultado;
        }

        public string ExcluirTarefa(int id)
        {
            string resultado;
            SqlConnection conexaoComBanco = AbrindoConexaoDB();

            SqlCommand comandoExclusao = new SqlCommand();
            comandoExclusao.Connection = conexaoComBanco;

            var tarefaId = MostrarTarefas().Exists(x => x.Id == id);
            if (tarefaId == false)
            {
                resultado = "Id Inválido";
                return resultado;
            }

            var tarefa = MostrarTarefas().Where(x => x.Id == id).FirstOrDefault();

            string sqlExclusao =
                @"DELETE FROM TBTAREFA               
                 WHERE 
                    [ID] = @ID";

            comandoExclusao.CommandText = sqlExclusao;

            comandoExclusao.Parameters.AddWithValue("ID", tarefa.Id);

            comandoExclusao.ExecuteNonQuery();

            conexaoComBanco.Close();

            resultado = $"Tarefa de Id {tarefa.Id} excluida com sucesso";
            return resultado;
        }

        public Tarefa MostrarTarefa(int idPesquisado)
        {
            var tarefaId = MostrarTarefas().Exists(x => x.Id == idPesquisado);
            if (tarefaId == false)
            {
                Console.WriteLine("Id Inválido");
                return null;
            }


            SqlConnection conexaoComBanco = AbrindoConexaoDB();

            SqlCommand comandoSelecao = new SqlCommand();
            comandoSelecao.Connection = conexaoComBanco;


            string sqlSelecao =
                @"SELECT 
                        [ID], 
                        [TITULO],
                        [DESCRICAO],
                        [DATAEDICAO],
                        [DATACONCLUSAO],
                        [STATUS]
                    FROM 
                        TBTAREFA
                    WHERE 
                        ID = @ID";

            comandoSelecao.CommandText = sqlSelecao;
            comandoSelecao.Parameters.AddWithValue("ID", idPesquisado);

            SqlDataReader leitorTarefas = comandoSelecao.ExecuteReader();

            if (leitorTarefas.Read() == false)
                return null;

            int id = Convert.ToInt32(leitorTarefas["ID"]);
            string descricao = Convert.ToString(leitorTarefas["DESCRICAO"]);
            string titulo = Convert.ToString(leitorTarefas["TITULO"]);
            bool status = Convert.ToBoolean(leitorTarefas["STATUS"]);

            var dataEdicaoParam = leitorTarefas["DATAEDICAO"];
            DateTime dataEdicao = DateTime.MinValue;
            if (!(dataEdicaoParam is DBNull))
                dataEdicao = Convert.ToDateTime(dataEdicaoParam);

            var dataConclusaoParam = leitorTarefas["DATACONCLUSAO"];
            DateTime dataConclusao = DateTime.MinValue;
            if (!(dataConclusaoParam is DBNull))
                dataConclusao = Convert.ToDateTime(dataConclusaoParam);


            Tarefa tarefa = new Tarefa();
            tarefa.Id = id;
            tarefa.Titulo = titulo;
            tarefa.Descricao = descricao;
            tarefa.Status = status;
            tarefa.DataEdicao = dataEdicao;
            tarefa.DataConclusao = dataConclusao;

            conexaoComBanco.Close();

            return tarefa;
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
                bool status = Convert.ToBoolean(leitorTarefas["STATUS"]);
                DateTime dataCriacao = Convert.ToDateTime(leitorTarefas["DATACRIACAO"]);

                var dataEdicaoParam = leitorTarefas["DATAEDICAO"];
                DateTime dataEdicao = DateTime.MinValue;
                if (!(dataEdicaoParam is DBNull))
                    dataEdicao = Convert.ToDateTime(dataEdicaoParam);

                var dataConclusaoParam = leitorTarefas["DATACONCLUSAO"];
                DateTime dataConclusao = DateTime.MinValue;
                if (!(dataConclusaoParam is DBNull))
                    dataConclusao = Convert.ToDateTime(dataConclusaoParam);



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

using System;

namespace GerenciadorTarefa.Model
{
    public class Tarefa
    {
        public Tarefa()
        {
            DataCriacao = DateTime.Now.AddDays(2);
            Status = false;
        }

        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Descricao { get; set; }
        public DateTime DataCriacao { get; set; }
        public DateTime DataEdicao  { get; set; }
        public DateTime DataConclusao { get; set; }
        public bool Status { get; set; }


        public bool TituloEhIgual(string titulo)
        {
            if (this.Titulo.Trim().ToLower().Equals(titulo.Trim().ToLower()))
            {
                return true;
            }
            return false;
        }

        public bool EhIgualDiaDeSemana()
        {
            if (DataCriacao.DayOfWeek == DayOfWeek.Saturday || DataCriacao.DayOfWeek == DayOfWeek.Sunday)
            {
                return false;
            }

            return true;
        }

        public bool TarefaEstaConcluida()
        {
            if(Status == true)
            {
                return true;
            }

            return false;
        }

        public void AtualizarDataConclusão()
        {
            if (Status == true)
            {
                DataConclusao = DateTime.Now;
            }
            
            if(DataConclusao == DateTime.MinValue)
            {
                DataConclusao = new DateTime(1753, 1, 1, 12, 00, 00);

            }
        }

        public void AtualizarDataEdicao()
        {
            DataEdicao = DateTime.Now;  
        }






    }
}

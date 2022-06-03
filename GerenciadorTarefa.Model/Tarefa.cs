using System;

namespace GerenciadorTarefa.Model
{
    public class Tarefa
    {
        public Tarefa()
        {
            DataCriacao =   DateTime.Now;
            DataEdicao = DateTime.Now;
            Status = false;
        }

        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Descricao { get; set; }
        public DateTime DataCriacao { get; set; }
        public DateTime DataEdicao  { get; set; }
        public DateTime DataConclusao { get; set; }
        public bool Status { get; set; }






    }
}

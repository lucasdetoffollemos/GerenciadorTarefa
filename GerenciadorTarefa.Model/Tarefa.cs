using System;

namespace GerenciadorTarefa.Model
{
    public class Tarefa
    {
        public Tarefa()
        {
            DataCriacao =   DateTime.Now;
            DataEdicao = DateTime.Now;
            Status = 0;
        }

//        Título;
//• Status;
//• Descrição;
//• Data de criação;
//• Data de edição;
//• Data de conclusão.
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Descricao { get; set; }
        public DateTime DataCriacao { get; set; }
        public DateTime DataEdicao  { get; set; }
        public DateTime DataConclusao { get; set; }
        public int Status { get; set; }






    }
}

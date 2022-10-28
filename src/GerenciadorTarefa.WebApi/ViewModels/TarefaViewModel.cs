using System;

namespace GerenciadorTarefa.WebApi.ViewModels
{
    public class TarefaListViewModel
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Descricao { get; set; }
        public DateTime DataCriacao { get; set; }
        public DateTime DataEdicao { get; set; }
        public DateTime DataConclusao { get; set; }
        public bool Status { get; set; }
    }

    public class TarefaDetailViewModel
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Descricao { get; set; }
        public DateTime DataCriacao { get; set; }
        public DateTime DataEdicao { get; set; }
        public DateTime DataConclusao { get; set; }
        public bool Status { get; set; }
    }

    public class TarefaCreateViewModel
    {
        
        public string Titulo { get; set; }
        public string Descricao { get; set; }
    }

    public class TarefaEditViewModel
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Descricao { get; set; }
        public bool Status { get; set; }
    }


}

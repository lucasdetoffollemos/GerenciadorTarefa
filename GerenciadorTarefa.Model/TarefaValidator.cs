using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GerenciadorTarefa.Model
{

//Título; 
//Status; 
//Descrição; 
//Data de criação; 
//Data de edição; 
//Data de conclusão.

    public class TarefaValidator : AbstractValidator<Tarefa>
    {
        public TarefaValidator()
        {

            RuleFor(x => x.Titulo).NotEmpty().WithMessage("Informe o titulo").Length(5, 50).WithMessage("O titulo deve estar entre 5 e 50 caracteres");

            RuleFor(x => x.Descricao).NotEmpty().WithMessage("Informe a descrição").Length(10, 200).WithMessage("A descrição deve estar entre 10 e 200 caracteres");
        }
    }
}

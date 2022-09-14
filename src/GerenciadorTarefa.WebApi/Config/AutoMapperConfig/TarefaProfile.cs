using AutoMapper;
using GerenciadorTarefa.Model;
using GerenciadorTarefa.WebApi.ViewModels;

namespace GerenciadorTarefa.WebApi.Config.AutoMapperConfig
{
    public class TarefaProfile : Profile
    {

        public TarefaProfile()
        {
            CreateMap<Tarefa, TarefaListViewModel>();

            CreateMap<Tarefa, TarefaDetailViewModel>();
            CreateMap<Tarefa, TarefaDetailViewModel>();

            CreateMap<TarefaCreateViewModel, Tarefa>().ForCtorParam("tarefaFoiCriada", opt => opt.MapFrom(src => true));
            CreateMap<TarefaEditViewModel, Tarefa>().ForCtorParam("tarefaFoiCriada", opt => opt.MapFrom(src => false)); 
        }
        

//            CreateMap<Cupom, CupomDetailsViewModel>()
//                    .ForMember(dest => dest.Tipo, opt => opt.MapFrom(src => (int) src.Tipo));

//            CreateMap<CupomCreateViewModel, Cupom>()
//                    .ForMember(dest => dest.Tipo, opt => opt.MapFrom(src => (TipoCupomEnum) src.Tipo));

//            CreateMap<CupomEditViewModel, Cupom>()
//                    .ForMember(dest => dest.Tipo, opt => opt.MapFrom(src => (TipoCupomEnum) src.Tipo));
    }
}

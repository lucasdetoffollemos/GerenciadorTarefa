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

            CreateMap<TarefaCreateViewModel, Tarefa>();

            CreateMap<TarefaEditViewModel, Tarefa>();
        }
        

//            CreateMap<Cupom, CupomDetailsViewModel>()
//                    .ForMember(dest => dest.Tipo, opt => opt.MapFrom(src => (int) src.Tipo));

//            CreateMap<CupomCreateViewModel, Cupom>()
//                    .ForMember(dest => dest.Tipo, opt => opt.MapFrom(src => (TipoCupomEnum) src.Tipo));

//            CreateMap<CupomEditViewModel, Cupom>()
//                    .ForMember(dest => dest.Tipo, opt => opt.MapFrom(src => (TipoCupomEnum) src.Tipo));
    }
}

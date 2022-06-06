using Autofac;
using AutoMapper;
using GerenciadorTarefa.Application;
using GerenciadorTarefa.Controller;
using GerenciadorTarefa.Model;

namespace GerenciadorTarefa.WebApi.Config.AutoFacConfig
{
    public class ContainerModule : Module
    {

        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<TarefaController>().As<IRepositoryTarefa>();
            builder.RegisterType<TarefaAppService>().As<ITarefaCadastravel>();


            builder.RegisterType<Mapper>().As<IMapper>();
        }
       
    }
}

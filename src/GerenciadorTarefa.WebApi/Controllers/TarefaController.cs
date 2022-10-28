using AutoMapper;
using GerenciadorTarefa.Application;
using GerenciadorTarefa.Model;
using GerenciadorTarefa.WebApi.ViewModels;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace GerenciadorTarefa.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TarefaController : ControllerBase
    {

        private readonly ITarefaCadastravel appService;
        private readonly IMapper mapper;
        

        public TarefaController(ITarefaCadastravel appService, IMapper mapper)
        {
            this.appService = appService;
            this.mapper = mapper;
        }

        // GET: api/<TarefaController>
        [HttpGet]
        public ActionResult<List<TarefaListViewModel>> GetAll()
        {
            var registros = appService.MostrarTarefas();

            var viewModel = mapper.Map<List<TarefaListViewModel>>(registros);

            return viewModel;
        }

        // GET api/<TarefaController>/id
        [HttpGet("{id}")]
        public ActionResult<TarefaDetailViewModel> Get(int id)
        {
            var registro = appService.MostrarTarefa(id);

            if (registro == null)
                return NotFound(id);

            var viewModel = mapper.Map<TarefaDetailViewModel>(registro);

            return Ok(viewModel);
        }

        // POST api/<TarefaController>
        [HttpPost]
        public ActionResult<TarefaCreateViewModel> Create(TarefaCreateViewModel viewModel)
        {
            var registro = mapper.Map<Tarefa>(viewModel);

            string registroRealizado = appService.InserirTarefa(registro);

            if (registroRealizado != "Tarefa inserida com sucesso")
            {
                return BadRequest(new
                {
                    success = false,
                    errors = registroRealizado
                });
            }

            return CreatedAtAction(nameof(Create), viewModel);
        }

        // PUT api/<TarefaController>/id
        [HttpPut]
        public ActionResult<TarefaEditViewModel> Edit(TarefaEditViewModel viewModel)
        {
            var registro = mapper.Map<Tarefa>(viewModel);

            string edicaoRealizada = appService.EditarTarefa(registro.Id, registro);

            if (edicaoRealizada != "Tarefa editada com sucesso")
            {
                return BadRequest(new
                {
                    success = false,
                    errors = edicaoRealizada
                });
            }

            return Ok(viewModel);
        }

        // DELETE api/<TarefaController>/id
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var delecaoRealizada = appService.ExcluirTarefa(id);

            if (delecaoRealizada != "Tarefa excluida com sucesso")
            {
               return BadRequest(new
                {
                    success = false,
                    errors = delecaoRealizada
                });

                
            }

            return Ok(id);

        }
    }
}

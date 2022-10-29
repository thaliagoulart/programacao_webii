import { Body, Controller, Delete, Get, Param, Put } from "@nestjs/common";
import { Tarefa } from "./tarefa.entity";
import { TarefaService } from "./tarefa.service";


@Controller()
export class TarefaController {

    constructor(
        private tarefaService : TarefaService
    ) {}
    
    @Get("/tarefa")
     async listaTarefa(): Promise<Tarefa[]> {
        return await this.tarefaService.findAll();
    }

    @Put("/tarefa")
    async salvarTarefa(@Body() tarefa) {

        await this.tarefaService.salvar(tarefa);

        return "ok";
    }

    @Get("/tarefa/:codigo")
    async buscarPorCodigo(@Param() parametro): Promise<Tarefa> {                       //Param = Significa parametro
        console.log(parametro.codigo); // pega o :codigo da url
       
        return await this.tarefaService.findById(parametro.codigo);
    }

    @Delete("/tarefa/:codigo")
    async excluirTarefa(@Param() parameto) {
       
        await this.tarefaService.excluir(parameto.codigo);
        
        return "ok";
    }
}

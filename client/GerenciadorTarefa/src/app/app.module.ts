import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './navegacao/footer/footer/footer.component';
import { HeaderComponent } from './navegacao/header/header/header.component';
import { MenuComponent } from './navegacao/menu/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TarefaListarComponent } from './tarefa/listar/tarefa-listar.component';
import { HttpTarefaService } from './tarefa/services/http-tarefa.service';
import { HttpClientModule } from '@angular/common/http';
import { TarefaCriarComponent } from './tarefa/criar/tarefa-criar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastContainerComponent } from './shared/components/toast-container/toast-container.component';
import { EditarComponent } from './tarefa/editar/tarefa-editar.component';
import { TarefaDetalhesComponent } from './tarefa/detalhes/tarefa-detalhes.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    TarefaListarComponent,
    TarefaCriarComponent,
    ToastContainerComponent,
    TarefaDetalhesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [{ provide: 'IHttpTarefaServiceToken', useClass: HttpTarefaService }],
  bootstrap: [AppComponent]
})

export class AppModule { }

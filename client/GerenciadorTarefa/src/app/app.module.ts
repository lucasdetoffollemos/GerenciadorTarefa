import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    TarefaListarComponent,
    TarefaCriarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{ provide: 'IHttpTarefaServiceToken', useClass: HttpTarefaService }],
  bootstrap: [AppComponent]
})

export class AppModule { }

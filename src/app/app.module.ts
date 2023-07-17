import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';

@NgModule({
  // declarations: serão incluídos todos os componentes, além de diretivas e pipes que estão contidos no módulo
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentoComponent
  ],
  // imports: serão incluídos os módulos importados, tanto da própria aplicação quanto de bibliotecas externas
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // providers: geralmente é declarado classes de serviços
  providers: [],
  // bootstrap: propriedade exclusiva do app.module, define qual será o primeiro componente a ser renderizado na aplicação
  bootstrap: [AppComponent]
})
export class AppModule { }

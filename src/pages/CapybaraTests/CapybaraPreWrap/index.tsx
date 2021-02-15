import React, { useState } from "react";
import { CodeBlock, CodeEmptyLine, CodeLine } from "../../../components/code_block/codeblock";
import HeaderPaginator from "../../../components/header_paginator/HeaderPaginator";

const CapybaraPreWrap = () => {
  //Go horse para quebrar o texto, ele precisa estar no canto esquerdo sem identacao
  //ou espaco, se nao a aplicacao ruby capybara quebra
  const [textBreak, setTextBreak] = useState(`Algum
  texto
  dentro de elemento P`);

  return (
    <div>
      <HeaderPaginator preview="/capybaratests?page=multipleselector" next="/capybaratests?page=uploadfile" />

      <div className="main-container">
        <section className="ambient-container">
          <h1 className="ambiente-title">Capybara quebra de linha</h1>

          <p style={{ whiteSpace: "pre-wrap" }}>{textBreak}</p>
        </section>

        <section className="ambient-code">
          <h1 className="ambiente-title">Arquivos e linhas de código</h1>

          <CodeBlock lines="5" lang="html5" title="Carregado na página">
            <CodeLine code={`<p style="white-space: pre-wrap;">`} />
            <CodeLine code="Algum" />
            <CodeLine code="texto" />
            <CodeLine code="dentro de elemento P" />
            <CodeLine code={`</p>`} />
          </CodeBlock>
          <p>
            Esse arquivo ele foi escrito em formato jsx, entretanto quando o react realiza a build a forma de
            interpretação de código fica igual a escrita acima
          </p>

          <CodeBlock lines="5" lang="ruby" title="textwrap.rb">
            <CodeLine code="class TextWrap < SitePrism::Page" />
            <CodeEmptyLine />
            <CodeLine tab="1" code={`#element :name_of_element, "#id"`} />
            <CodeEmptyLine />
            <CodeLine code="end" />
          </CodeBlock>

          <CodeBlock lines="7" lang="cucumber" title="helloWorld.feature">
            <CodeLine code="#language: pt" />
            <CodeEmptyLine />
            <CodeLine tab="1" code="@textWrap" />
            <CodeLine tab="1" code="Funcionalidade: Verificar se o texto quebrado foi carregado" />
            <CodeEmptyLine />
            <CodeLine tab="1" code="Esquema do Cenario: Verificar se existe um texto quebrado" />
            <CodeLine tab="2" code="Entao sera buscado o texto com quebra de linhas" />
          </CodeBlock>

          <CodeBlock lines="9" lang="ruby" title="helloWorld.rb">
            <CodeLine code="textWrap_page = TextWrap.new" />
            <CodeEmptyLine />
            <CodeLine code="Entao('sera buscado o texto com quebra de linhas') do" />
            <CodeEmptyLine />
            <CodeLine tab="1" code={`textWrap_page.visit("/capybaraprewrap")`} />
            <CodeEmptyLine />
            <CodeLine
              tab="1"
              code={`expect(textWrap_page).to have_selector('p', text: /Algum\s+texto\s+dentro de elemento P/)`}
            />
            <CodeEmptyLine />
            <CodeLine code="end" />
          </CodeBlock>
        </section>
      </div>
    </div>
  );
};

export default CapybaraPreWrap;

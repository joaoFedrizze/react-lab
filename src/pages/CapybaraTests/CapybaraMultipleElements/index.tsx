import React, { useState } from "react";
import "../ambient.scss";
import { CodeBlock, CodeEmptyLine, CodeLine } from "../../../components/code_block/codeblock";
import HeaderPaginator from "../../../components/header_paginator/HeaderPaginator";

const CapybaraMultipleElements: React.FC = () => {
  const [textElement, setTextElement] = useState<string>("");

  return (
    <div>
      <HeaderPaginator
        preview="/capybaratests?page=helloworld"
        next="/capybaratests?page=diferenceofselectors"
      />

      <div className="main-container">
        <section className="ambient-container">
          <h1 className="ambiente-title">Selecionar seletor expecifico entre multiplo seletores</h1>

          <p>
            Todos os elementso estão com o mesmo seletor <b>:class 'alpha'</b>
          </p>

          <div>
            <button className="alpha" onClick={() => setTextElement("O valor é 1")}>
              Opcao 1
            </button>
            <br />
            <button className="alpha" onClick={() => setTextElement("O valor é 2")}>
              Opcao 2
            </button>
            <br />
            <button className="alpha" onClick={() => setTextElement("O valor é 3")}>
              Opcao 3
            </button>
          </div>

          <p id="text-change">Nenhum dos links foram selecionados!</p>
        </section>

        <section className="ambient-code">
          <h1 className="ambiente-title">Arquivos e linhas de código</h1>

          <CodeBlock lines="5" lang="ruby" title="multipleselector.rb">
            <CodeLine code="class MultipleSelector < SitePrism::Page" />
            <CodeEmptyLine />
            <CodeLine tab="1" code={`element :text_field, "#text-change"`} />
            <CodeEmptyLine />
            <CodeLine code="end" />
          </CodeBlock>

          <CodeBlock lines="7" lang="cucumber" title="multipleselector.feature">
            <CodeLine code="#language: pt" />
            <CodeEmptyLine></CodeEmptyLine>
            <CodeLine tab="1" code="@multipleSelector" />
            <CodeLine
              tab="1"
              code="Funcionalidade: Coletar todos elementos semelhantes e selecionar um por um"
            />
            <CodeEmptyLine />
            <CodeLine tab="1" code="Esquema do Cenario: validar a multi selecao" />
            <CodeLine tab="2" code="Entao o usuario vai selecionar botao por botao e o valor sera alterado" />
          </CodeBlock>

          <CodeBlock lines="15" lang="ruby" title="multipleselector.rb">
            <CodeLine code="multipleselector_page = MultipleSelector.new" />
            <CodeEmptyLine />
            <CodeLine code="Entao('o usuario vai selecionar botao por botao e o valor sera alterado') do" />
            <CodeLine tab="1" code={`multipleselector_page.visit("/capybaramultpleelements")`} />
            <CodeEmptyLine />
            <CodeLine tab="1" code="multipleselector_page.find_all('.alpha')[0].click" />
            <CodeLine
              tab="1"
              code="expect(multipleselector_page).to have_selector('p', text: 'O valor é 1')"
            />
            <CodeEmptyLine />
            <CodeLine tab="1" code="multipleselector_page.find_all('.alpha')[1].click" />
            <CodeLine
              tab="1"
              code="expect(multipleselector_page).to have_selector('p', text: 'O valor é 2')"
            />
            <CodeEmptyLine />
            <CodeLine tab="1" code="multipleselector_page.find_all('.alpha')[2].click" />
            <CodeLine
              tab="1"
              code="expect(multipleselector_page).to have_selector('p', text: 'O valor é 3')"
            />
            <CodeEmptyLine />
            <CodeLine code="end" />
          </CodeBlock>
        </section>
      </div>
    </div>
  );
};

export default CapybaraMultipleElements;

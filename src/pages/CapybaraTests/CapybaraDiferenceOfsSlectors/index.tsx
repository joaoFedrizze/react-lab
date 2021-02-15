import React from "react";
import { CodeBlock, CodeEmptyLine, CodeLine } from "../../../components/code_block/codeblock";
import HeaderPaginator from "../../../components/header_paginator/HeaderPaginator";
import "../ambient.scss";

const CapybaraDiferenceOfSelectors: React.FC = () => {
  return (
    <div>
      <HeaderPaginator preview="/capybaratests?page=multipleelements" next="/capybaratests?page=faker" />

      <div className="main-container">
        <section className="ambient-container">
          <h1 className="ambiente-title">Diferença entre os seletores find() e expect()</h1>

          <p className="separator">Elemento p com algum texto simples</p>

          <div className="solution">
            <h2>! Solução</h2>

            <p>
              Conclusão: Ambos métodos verificam se algo existe na página, entretanto, há uma grande diferença
              em seus usos, o método “find” é usado quando você quer interagir com um seletor, como um dos
              exemplos é o comando “find(seletor pros).click” entretanto se você deseja verificar se algo foi
              carregado é importante você utilizar o comando “expect”, pois esse comando valida se algo foi
              carregado na página.
            </p>
          </div>
        </section>

        <section className="ambient-code">
          <h1 className="ambiente-title">Arquivos e linhas de código</h1>

          <CodeBlock lines="5" lang="ruby" title="DiferenceOfSelectors.rb">
            <CodeLine code="class DiferenceOfSelectors < SitePrism::Page" />
            <CodeEmptyLine />
            <CodeLine tab="1" code={`#element :name_of_element, "#id"`} />
            <CodeEmptyLine />
            <CodeLine code="end" />
          </CodeBlock>

          <CodeBlock lines="8" lang="cucumber" title="DiferenceOfSelectors.feature">
            <CodeLine code="#language: pt" />
            <CodeEmptyLine />
            <CodeLine tab="1" code="@diferenceOfSelectors" />
            <CodeLine tab="1" code="Funcionalidade: Testar a diferenca entre seletores find e expected" />
            <CodeEmptyLine />
            <CodeLine tab="1" code="Esquema do Cenario: testar find e expected comandos" />
            <CodeLine tab="1" code="Dado usuario realizou busca entre find e expected" />
            <CodeLine code="end" />
          </CodeBlock>

          <CodeBlock lines="13" lang="ruby" title="DiferenceOfSelectors.rb">
            <CodeLine code="diferenceofselectors_page = DiferenceOfSelectors.new" />
            <CodeEmptyLine />
            <CodeLine code="Dado('usuario realizou busca entre find e expected') do" />
            <CodeEmptyLine />
            <CodeLine tab="1" code={`diferenceofselectors_page.visit("/CapybaraDiferenceOfSelectors")`} />
            <CodeEmptyLine />
            <CodeLine tab="1" code="#Seletor find" />
            <CodeLine
              tab="1"
              code="diferenceofselectors_page.find('p', text: 'Elemento p com algum texto simples', class: 'separator')"
            />
            <CodeEmptyLine />
            <CodeLine tab="1" code="#Seletor expected" />
            <CodeLine
              tab="1"
              code="expect(diferenceofselectors_page).to have_text('Elemento p com algum texto simples')"
            />
            <CodeEmptyLine />
            <CodeLine code="end" />
          </CodeBlock>
        </section>
      </div>
    </div>
  );
};

export default CapybaraDiferenceOfSelectors;

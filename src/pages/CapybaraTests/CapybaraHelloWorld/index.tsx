import React from "react";

import { Link, useHistory, useLocation } from "react-router-dom";

import "../ambient.scss";

//Codeblock
import { CodeBlock, CodeLine, CodeEmptyLine } from "../../../components/code_block/codeblock";
import HeaderPaginator from "../../../components/header_paginator/HeaderPaginator";

const CapybaraHelloWorld = () => {
  let history = useHistory();

  return (
    <>
      <HeaderPaginator next="/capybaratests?page=multipleelements" />

      <div className="main-container">
        <section className="ambient-container">
          <h1 className="ambiente-title">Hello World</h1>

          <p>
            O teste automatizado @helloWorld é testado na <Link to="/">index</Link> deste projeto, entretanto
            o seu código está escrito aqui.
          </p>
          <p>
            Esse teste foi criado com finalidade de encontrar a página <Link to="/404">404</Link> do projeto
          </p>
        </section>

        <section className="ambient-code">
          <h1 className="ambiente-title">Arquivos e linhas de código</h1>

          <CodeBlock lines="5" lang="ruby" title="helloWorld.rb">
            <CodeLine code="class HelloWorld < SitePrism::Page" />
            <CodeEmptyLine />
            <CodeLine tab="1" code={`#element :name_of_element, "#id"`} />
            <CodeEmptyLine />
            <CodeLine code="end" />
          </CodeBlock>

          <CodeBlock lines="8" lang="cucumber" title="helloWorld.feature">
            <CodeLine code="#language: pt" />
            <CodeEmptyLine />
            <CodeLine tab="1" code="@helloWorld" />
            <CodeLine tab="1" code="Funcionalidade: Testar capybara no projeto" />
            <CodeEmptyLine />
            <CodeLine tab="1" code="Esquema do Cenario: Encontrar a pagina 404" />
            <CodeLine tab="2" code="Dado que o usuario clicou no link de pagina perdida" />
            <CodeLine
              tab="2"
              code={`Entao uma pagina com a mensagem "404 Raposa perdida no espaço" aparecera`}
            />
          </CodeBlock>

          <CodeBlock lines="10" lang="ruby" title="helloWorld.rb">
            <CodeLine code="chelloWorld_page = HelloWorld.new" />
            <CodeEmptyLine />

            <CodeLine code="Dado('que o usuario clicou no link de pagina perdida') do" />
            <CodeLine tab="1" code="helloWorld_page.visit('/')" />
            <CodeLine tab="1" code="helloWorld_page.find('a', text: 'localhost3000/somethingelse').click" />
            <CodeLine code="end" />
            <CodeEmptyLine />
            <CodeLine code="Entao('uma pagina com a mensagem {string} aparecera') do |mensagem|" />
            <CodeLine tab="1" code="expect(helloWorld_page).to have_selector('h1', text: mensagem)" />
            <CodeLine code="end" />
          </CodeBlock>
        </section>
      </div>
    </>
  );
};

export default CapybaraHelloWorld;

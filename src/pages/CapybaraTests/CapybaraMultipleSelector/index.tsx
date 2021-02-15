import React from "react";
import { CodeBlock, CodeEmptyLine } from "../../../components/code_block/codeblock";
import HeaderPaginator from "../../../components/header_paginator/HeaderPaginator";

const CapybaraMultipleSelector = () => {
  setTimeout(function () {
    let element = document.getElementById("text-inject");

    if (element !== null) {
      element.innerHTML = "Elemento p com algum texto simples";
    }
  }, 5000);

  return (
    <div>
      <HeaderPaginator preview="/capybaratests?page=faker" next="/capybaratests?page=prewrap" />

      <div className="main-container">
        <section className="ambient-container">
          <h1 className="ambiente-title">Capybara multiple expected</h1>

          <p id="text-inject">Esse texto vai ser carregado em 5s</p>
          <p>Elemento p com algum texto simples</p>
          <p>
            Quando você usa o comando “expect(page).to have_selector(selector)” ele não valida apenas um
            elemento.
          </p>
        </section>

        <section className="ambient-code">
          <h1 className="ambiente-title">Arquivos e linhas de código</h1>

          <CodeBlock lines="1" lang="ruby" title="helloWorld.rb">
            <CodeEmptyLine />
          </CodeBlock>

          <CodeBlock lines="1" lang="cucumber" title="helloWorld.feature">
            <CodeEmptyLine />
          </CodeBlock>

          <CodeBlock lines="1" lang="ruby" title="helloWorld.rb">
            <CodeEmptyLine />
          </CodeBlock>
        </section>
      </div>
    </div>
  );
};

export default CapybaraMultipleSelector;

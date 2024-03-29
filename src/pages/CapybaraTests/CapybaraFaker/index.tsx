import React, { useState } from "react";
import { CodeBlock, CodeEmptyLine, CodeLine } from "../../../components/code_block/codeblock";
import HeaderPaginator from "../../../components/header_paginator/HeaderPaginator";

//css
import "../ambient.scss";

const CapybaraFaker: React.FC = () => {
  const [fields, setFields] = useState<{ field_A: string; field_B: string; field_C: string }>({
    field_A: "",
    field_B: "",
    field_C: "",
  });

  return (
    <div>
      <HeaderPaginator
        next="/capybaratests?page=multipleselector"
        preview="/capybaratests?page=diferenceofselectors"
      />

      <div className="main-container">
        <section className="ambient-container">
          <h1 className="ambiente-title">Capybara Faker</h1>

          <form id="form">
            <input
              id="field_A"
              name="fiel_A"
              type="text"
              placeholder="field_A"
              onChange={(e) => setFields({ ...fields, field_A: e.target.value })}
            />
            <br />
            <input
              id="field_B"
              name="fiel_B"
              type="text"
              placeholder="field_B"
              onChange={(e) => setFields({ ...fields, field_B: e.target.value })}
            />
            <br />
            <input
              id="field_C"
              name="fiel_C"
              type="text"
              placeholder="field_C"
              onChange={(e) => setFields({ ...fields, field_C: e.target.value })}
            />
          </form>

          <div id="replacetext">
            <p>Campo 1: {fields.field_A}</p>
            <p>Campo 2: {fields.field_B}</p>
            <p>Campo 3: {fields.field_C}</p>
          </div>
        </section>

        <section className="ambient-code">
          <h1 className="ambiente-title">Arquivos e linhas de código</h1>

          <CodeBlock lines="12" lang="ruby" title="multipleselector.rb">
            <CodeLine code="class CapybaraFaker < SitePrism::Page" />
            <CodeEmptyLine />
            <CodeLine tab="1" code="#Campos do formulario" />
            <CodeLine tab="1" code={`element :submit_field, "#submitform"`} />
            <CodeLine tab="1" code={`element :field_a, "#field_A"`} />
            <CodeLine tab="1" code={`element :field_b, "#field_B"`} />
            <CodeLine tab="1" code={`element :field_c, "#field_C"`} />
            <CodeEmptyLine />
            <CodeLine tab="1" code="#Texto apresentado" />
            <CodeLine tab="1" code={`element :text_content, "#replacetext"`} />
            <CodeEmptyLine />
            <CodeLine code="end" />
          </CodeBlock>

          <CodeBlock lines="9" lang="cucumber" title="capybarafaker.jsx">
            <CodeLine code="#language: pt" />
            <CodeEmptyLine />
            <CodeLine tab="1" code="@capybaraFaker" />
            <CodeLine tab="1" code="Funcionalidade: Testar a gema do capybara Faker" />
            <CodeEmptyLine />
            <CodeLine tab="1" code="Esquema do Cenario: Alterar campos e verificar seus valores" />
            <CodeLine tab="2" code="Dado que o usuario preencheu os campos do formuario" />
            <CodeLine tab="2" code="Entao ele realizara um submit" />
            <CodeLine tab="2" code="E verificara se os valores correspondem com os capos inseridos" />
          </CodeBlock>

          <CodeBlock lines="24" lang="ruby" title="capybarafaker.rb">
            <CodeLine code="capybarafaker_page = CapybaraFaker.new" />
            <CodeEmptyLine />
            <CodeLine code="#Textos" />
            <CodeLine code="texto_a = Faker::Verb.base" />
            <CodeLine code="texto_b = Faker::Name.unique.name " />
            <CodeLine code="texto_c = Faker::Movies::StarWars.character" />
            <CodeEmptyLine />
            <CodeLine code="Dado('que o usuario preencheu os campos do formuario') do" />
            <CodeLine tab="1" code={`capybarafaker_page.visit("/capybarafaker")`} />
            <CodeEmptyLine />
            <CodeLine tab="1" code="capybarafaker_page.field_a.set(texto_a)" />
            <CodeLine tab="1" code="capybarafaker_page.field_b.set(texto_b)" />
            <CodeLine tab="1" code="capybarafaker_page.field_c.set(texto_c)" />
            <CodeLine code="end" />
            <CodeEmptyLine />
            <CodeLine code="Entao('ele realizara um submit') do" />
            <CodeLine tab="1" code="capybarafaker_page.submit_field.click" />
            <CodeLine code="end" />
            <CodeEmptyLine />
            <CodeLine code="Entao('verificara se os valores correspondem com os capos inseridos') do" />
            <CodeLine tab="1" code="expect(capybarafaker_page).to have_selector('p', text: texto_a)" />
            <CodeLine tab="1" code="expect(capybarafaker_page).to have_selector('p', text: texto_b)" />
            <CodeLine tab="1" code="expect(capybarafaker_page).to have_selector('p', text: texto_c)" />
            <CodeLine code="end" />
          </CodeBlock>
        </section>
      </div>
    </div>
  );
};

export default CapybaraFaker;

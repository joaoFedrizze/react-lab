import React from 'react'

//css
import './ambient.scss'

//Codeblock
import {CodeBlock, CodeLine, CodeEmptyLine} from '../../components/code_block/codeblock'
import HeaderPaginator from '../../components/header_paginator/HeaderPaginator'

class CapybaraFaker extends React.Component {

    changeFields(event){

        event.preventDefault();

        let formFields = [ 
            document.getElementById('field_A').value, 
            document.getElementById('field_B').value,
            document.getElementById('field_C').value,
        ]

        let textInject = ''
        
        for(let i = 0; i < formFields.length; i++){

            textInject += '<p>Campo ' + (i + 1) + ': ' + formFields[i] + '<p/>'

        }

        let textElement = document.getElementById('replacetext')

        textElement.innerHTML = textInject

    }

    render(){
        return(
            <div>

                <HeaderPaginator
                next="/capybaramultipleexpect"
                preview="/capybaradiferenceofselectors"
                />

                <div className="main-container">

                    <section className="ambient-container">

                        <h1 className="ambiente-title">Capybara Faker</h1>

                        <form id="form" onSubmit={this.changeFields}>
                            <input id="field_A" name="fiel_A" type="text" placeholder="field_A"/><br/>
                            <input id="field_B" name="fiel_B" type="text" placeholder="field_B"/><br/>
                            <input id="field_C" name="fiel_C" type="text" placeholder="field_C"/><br/>
                            <input id="submitform" type="submit"/>
                        </form>

                        <div id="replacetext">
                            <p>Campo 1:</p>
                            <p>Campo 2:</p>
                            <p>Campo 3:</p>
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

                        <CodeBlock lines="23" lang="ruby" title="capybarafaker.rb">
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

                            <CodeLine code="Entao('verificara se os valores correspondem com os capos inseridos') do" />
                            <CodeLine tab="1" code="expect(capybarafaker_page).to have_selector('p', text: texto_a)" />
                            <CodeLine tab="1" code="expect(capybarafaker_page).to have_selector('p', text: texto_b)" />
                            <CodeLine tab="1" code="expect(capybarafaker_page).to have_selector('p', text: texto_c)" />
                            <CodeLine code="end" />
                        </CodeBlock>
                    </section>
                </div>
            </div>


        )
    }

}

export default CapybaraFaker;
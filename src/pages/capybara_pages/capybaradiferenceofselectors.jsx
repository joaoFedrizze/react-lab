import React from 'react'

//css
import './ambient.scss'

//Codeblock
import {CodeBlock, CodeLine, CodeEmptyLine} from '../../components/code_block/codeblock'
import HeaderPaginator from '../../components/header_paginator/HeaderPaginator'

class CapybaraDiferenceOfSelectors extends React.Component {

    render(){
        return(
            <div>

                <HeaderPaginator
                preview="/capybaramultpleelements"
                next="/capybarafaker"
                />

                <div className="main-container">

                    <section className="ambient-container">

                        <h1 className="ambiente-title">Diferença entre os seletores find() e expect()</h1>

                        <p className="separator">Elemento p com algum texto simples</p>

                        <p>Conclusão: não ha conclusões</p>
                        
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
                            <CodeLine tab="1" code="diferenceofselectors_page.find('p', text: 'Elemento p com algum texto simples', class: 'separator')" />
                            <CodeEmptyLine />
                            <CodeLine tab="1" code="#Seletor expected" />
                            <CodeLine tab="1" code="expect(diferenceofselectors_page).to have_text('Elemento p com algum texto simples')" />
                            <CodeEmptyLine />
                            <CodeLine code="end" />
                        </CodeBlock>       

                    </section>
                </div>
            </div>


        )
    }

}

export default CapybaraDiferenceOfSelectors;
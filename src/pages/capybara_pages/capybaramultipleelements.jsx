import React from 'react'

//css
import './ambient.scss'

//Codeblock
import {CodeBlock, CodeLine, CodeEmptyLine} from '../../components/code_block/codeblock'
import HeaderPaginator from '../../components/header_paginator/HeaderPaginator'

class CapybaraMultipleElements extends React.Component  {

    changeText(value){

        let textElement = document.getElementById('text-change')

        if( value === 1 ){

            textElement.innerHTML = "O valor é 1"

        }else if( value === 2){

            textElement.innerHTML = "O valor é 2"

        }else if( value === 3){

            textElement.innerHTML = "O valor é 3"

        }

        return false

    }

    render(){
        return (

            <div>
                
                <HeaderPaginator
                preview="/capybarahelloworld"
                next="/CapybaraDiferenceOfSelectors"
                />

                <div className="main-container">

                    <section className="ambient-container">
                    
                        <h1 className="ambiente-title">Selecionar seletor expecifico entre multiplo seletores</h1>

                        <p>Todos os elementso estão com o mesmo seletor <b>:class 'alpha'</b></p>

                        <div>
                            
                            <button className="alpha" onClick={() => this.changeText(1)}>Opcao 1</button><br/>
                            <button className="alpha" onClick={() => this.changeText(2)}>Opcao 2</button><br/>
                            <button className="alpha" onClick={() => this.changeText(3)}>Opcao 3</button>

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
                            <CodeLine code="#language: pt"/>
                            <CodeEmptyLine></CodeEmptyLine>
                            <CodeLine tab="1" code="@multipleSelector" />
                            <CodeLine tab="1" code="Funcionalidade: Coletar todos elementos semelhantes e selecionar um por um" />
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
                            <CodeLine tab="1" code="multipleselector_page.text_field(text: 'O valor é 1')" />
                            <CodeEmptyLine />
                            <CodeLine tab="1" code="multipleselector_page.find_all('.alpha')[1].click" />
                            <CodeLine tab="1" code="multipleselector_page.text_field(text: 'O valor é 2')" />
                            <CodeEmptyLine />
                            <CodeLine tab="1" code="multipleselector_page.find_all('.alpha')[2].click" />
                            <CodeLine tab="1" code="multipleselector_page.text_field(text: 'O valor é 3')" />
                            <CodeEmptyLine />
                            <CodeLine code="end" />
                        </CodeBlock>
                    </section>
                </div>
            </div>

        )

    }

}

export default CapybaraMultipleElements;
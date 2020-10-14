import React from 'react'

import { Link } from 'react-router-dom'

import './ambient.scss'

import foxImage from '../../assets/img/404.jpg'

//Codeblock
import {CodeBlock, CodeLine, CodeEmptyLine} from '../../components/code_block/codeblock'
import HeaderPaginator from '../../components/header_paginator/HeaderPaginator'

class CapybaraUploadFile extends React.Component {


        changeImage = () => {

            let input = document.getElementById('input-image');

            let reader = new FileReader();

            reader.onload = function(e) {

                let imageElement = document.getElementById('image-to-change');

                imageElement.src = e.target.result;

            }

            reader.readAsDataURL(input.files[0])

        }

        render(){
            return(
                <div>

                <HeaderPaginator 
                    preview="/capybaraprewrap"
                />

                    <div className="main-container">

                        <section className="ambient-container">

                            <h1 className="ambiente-title">Upload de arquivo</h1>

                            <input id="input-image" type="file" accept="image/x-png,image/gif,image/jpeg" onChange={this.changeImage}></input>

                            <img id="image-to-change" style={{width: '80%'}} src={foxImage} alt="Foto de uma raposa vestindo uma roupa de astronauta" />

                            <p>Para que ocorra um envio de arquivo, é necessário passar o diretório do arquivo a partir da pasta do teste, ou seja a rais do envio do arquivo é a pasta onde está sendo realizado os testes do capybara</p>

                        </section>
                        
                        <section className="ambient-code">

                        <h1 className="ambiente-title">Arquivos e linhas de código</h1>

                            <CodeBlock lines="6" lang="ruby" title="fileupload.rb">
                                <CodeLine code="class FileUpload < SitePrism::Page" />
                                <CodeEmptyLine />
                                <CodeLine tab="1" code="#Elemento de envio" />
                                <CodeLine tab="1" code={`element :upload_input, "#input-image"`} />
                                <CodeEmptyLine />
                                <CodeLine code="end" />
                            </CodeBlock>

                            <CodeBlock lines="7" lang="cucumber" title="fileupload.feature">
                                <CodeLine code="#language: pt" />
                                <CodeEmptyLine />
                                <CodeLine tab="1" code="@fileUpload" />
                                <CodeLine tab="1" code="Funcionalidade: Testar o envio de arquivo" />
                                <CodeEmptyLine />
                                <CodeLine tab="1" code="Esquema do Cenario: Enviar um arquivo de imagem" />
                                <CodeLine tab="2" code="Dado usuario acessou a pagina e envio um arquivo" />
                            </CodeBlock>

                            <CodeBlock lines="9" lang="ruby" title="fileupload.rb">
                                <CodeLine code="fileupload_page = FileUpload.new" />
                                <CodeEmptyLine />
                                <CodeLine code="Dado('usuario acessou a pagina e envio um arquivo') do" />
                                <CodeEmptyLine />
                                <CodeLine tab="1" code={`fileupload_page.visit("/capybarauploadfile")`} />
                                <CodeEmptyLine />
                                <CodeLine tab="1" code={`fileupload_page.upload_input.attach_file('assets/asset_fileupload.jpg')`}/>
                                <CodeEmptyLine />
                                <CodeLine code="end" />
                            </CodeBlock>

                        </section>
                    </div>
                </div>

            )
        }

}

export default CapybaraUploadFile;
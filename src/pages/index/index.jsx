import React from 'react';
import { Link } from 'react-router-dom'

import './index.scss'

const MainPage = () => {

    return(
        <main>

            <section className="apresentacao">

                <h1>Bem vindo ao laboratório de testes em ambiente react-app</h1>

                <p>Este projeto é estruturado para estudar o comportamento de Framework’s e para anotar informações de como foi realizado o uso das aplicações, como por exemplo, o acesso a página 404, tente acessar <Link to="somethingelse">localhost3000/somethingelse</Link></p>

            </section>

            <section>

                <h2>Testes feitos com capybara</h2>

                <ul>
                    <li><Link to="/capybarahelloworld">Hello World</Link></li>
                    <li><Link to="/capybaramultpleelements">Selecionar seletor expecifico entre seletores repetidos</Link></li>
                    <li><Link to="/CapybaraDiferenceOfSelectors">Diferença entre os seletores <b>find()</b> e <b>expect()</b></Link></li>
                    <li><Link to="/capybarafaker">Capybara Faker</Link></li>
                    <li><Link to="/capybaramultipleexpect">Multiple expect elements</Link></li>
                    <li><Link to="/capybaraprewrap">Procurar texto com quebras de linha</Link></li>
                    <li><Link to="/capybarauploadfile">Upload de arquivos</Link></li>
                    <li>Drag and Drop</li>
                </ul>

            </section>

            <section>

                <h2>Componentes criados</h2>

                <ul>
                    <li>Code block</li>
                </ul>

            </section>

        </main>
    )

}

export default MainPage;
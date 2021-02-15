import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const MainPage = () => {
  return (
    <main>
      <section className="apresentacao">
        <h1>Bem vindo ao laboratório de testes em ambiente react-app</h1>

        <p>
          Este projeto é estruturado para estudar o comportamento de Framework’s e para anotar informações de
          como foi realizado o uso das aplicações, como por exemplo, o acesso a página 404, tente acessar{" "}
          <Link to="somethingelse">localhost3000/somethingelse</Link>
        </p>
      </section>

      <section>
        <h2>Testes feitos com capybara</h2>

        <ul>
          <li>
            <Link to="/capybaratests?page=helloworld">Hello World</Link>
          </li>
          <li>
            <Link to="/capybaratests?page=multipleelements">
              Selecionar seletor expecifico entre seletores repetidos
            </Link>
          </li>
          <li>
            <Link to="/capybaratests?page=diferenceofselectors">
              Diferença entre os seletores <b>find()</b> e <b>expect()</b>
            </Link>
          </li>
          <li>
            <Link to="/capybaratests?page=faker">Capybara Faker</Link>
          </li>
          <li>
            <Link to="/capybaratests?page=multipleselector">Multiple expect elements</Link>
          </li>
          <li>
            <Link to="/capybaratests?page=prewrap">Procurar texto com quebras de linha</Link>
          </li>
          <li>
            <Link to="/capybaratests?page=uploadfile">Upload de arquivos</Link>
          </li>
          <li>Drag and Drop</li>
          <li>Utilizar script</li>
        </ul>
      </section>

      <section>
        <h2>Componentes criados</h2>

        <ul>
          <li>Code block</li>
        </ul>
      </section>
    </main>
  );
};

export default MainPage;

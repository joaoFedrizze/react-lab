import React from 'react'

//Style
import './codeblock.scss'

//Images
import RubyImage from '../../assets/img/ruby.png'
import CucumberImage from '../../assets/img/cucumber.png'

const CodeLine = (props) => {

    const tab = []

    if(props.tab !== undefined || props.tab !== null){

        for(let i = 0; i < props.tab; i++){

            tab.push(<span>&#160; &#160;</span>)

        }

    }

    const code = []

    code.push(props.code)

    return (

        <p>{tab} {code}</p>

    )

}

const CodeEmptyLine = () => {

    return (
        <p></p>
    )

}

const CodeBlock = (props) => {

    //[+] Quantidade de linhas
    const lines = [];

    for(let i = 0; i < props.lines; i++){

        lines.push(<li>{(i + 1)}</li>)

    }
    //[-] Quantidade de linhas

    //[+] Logo da linguage
    const langLogo = [];

    if(props.lang === 'ruby'){

        langLogo.push(<img src={RubyImage} alt="ruby logo"/>)

    }else if(props.lang === 'cucumber'){

        langLogo.push(<img src={CucumberImage} alt="ruby logo"/>)

    }
    //[-] Logo da linguage

    return(
        
        <div className="code-block">
            <h2>{langLogo} {props.title}</h2>
            <div className="code-block-container">
                <span className="code-lines">
                    <ul>
                        {lines}
                    </ul>
                </span>
                <div className="code-container">
                    {props.children}
                </div>
            </div>
        </div>

    )


}

export {CodeBlock , CodeLine, CodeEmptyLine};
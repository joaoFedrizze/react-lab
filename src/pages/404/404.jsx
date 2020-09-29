import React from 'react'
import { Link } from 'react-router-dom'

import './404.scss'

const PageNotFound = () => {

    return(

        <div className="page-not-found">

            <div className="page-not-found-container">
                <h1>404 Raposa perdida no espaço</h1>
                <Link to="/">Voltar ao inicio</Link>
            </div>
            
            <span className="page-not-found-background"/>

        </div>

    )

}

export default PageNotFound;
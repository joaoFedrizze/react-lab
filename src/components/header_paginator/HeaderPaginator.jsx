import React from 'react'
import { Link } from 'react-router-dom'

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight, faRunning } from '@fortawesome/free-solid-svg-icons'

//css
import './headerpaginator.scss'

const HeaderPaginator = (props) => {

    const preview = []
    const next = []

    if(props.preview !== null && props.preview !== undefined){

        preview.push(
            <Link to={props.preview}>
                <FontAwesomeIcon icon={faCaretLeft} /> Anterior
            </Link>
        )

    }

    if(props.nex !== null && props.next !== undefined){

        preview.push(
            <Link to={props.next}>
               Proximo <FontAwesomeIcon icon={faCaretRight} /> 
            </Link>
        )

    }

    return(

        <header className="paginator-header">

            <nav className="Paginator-header-space">
                <div className="Paginator-header-links">
                    <Link to="/">
                        Home <FontAwesomeIcon icon={faRunning} />
                    </Link>
                </div>

                <div className="Paginator-header-links Paginator-header-links-right">  
                    
                    {preview}

                    {next}
                    
                </div>
            </nav>

        </header>

    )

}

export default HeaderPaginator;
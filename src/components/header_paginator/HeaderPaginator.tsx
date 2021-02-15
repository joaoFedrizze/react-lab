import React from "react";
import { Link, useHistory } from "react-router-dom";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight, faRunning } from "@fortawesome/free-solid-svg-icons";

//css
import "./headerpaginator.scss";

interface Iprops {
  preview?: string;
  next?: string;
}

const HeaderPaginator: React.FC<Iprops> = (props) => {
  const { preview, next } = props;

  const history = useHistory();

  return (
    <header className="paginator-header">
      <nav className="Paginator-header-space">
        <div className="Paginator-header-links">
          <Link to="/">
            Home <FontAwesomeIcon icon={faRunning} />
          </Link>
        </div>

        <div className="Paginator-header-links Paginator-header-links-right">
          {preview && (
            <a
              onClick={() => {
                history.push(preview);
              }}
            >
              <FontAwesomeIcon icon={faCaretLeft} /> Anterior
            </a>
          )}
          {next && (
            <a
              onClick={() => {
                history.push(next);
              }}
            >
              Proximo <FontAwesomeIcon icon={faCaretRight} />
            </a>
          )}
        </div>
      </nav>
    </header>
  );
};

export default HeaderPaginator;

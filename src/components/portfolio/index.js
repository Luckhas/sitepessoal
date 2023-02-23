import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

import './styles.css';

export const Portfolio = (props) => {
    return(
        <div className="portfolioItem">
            <div className="testesdasda" style={{backgroundImage: `url(${props.bg})`}}>
                <a href={props.url} target="_blank"><div className="portfolioItemLink">
                    <div>
                        <img src="data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='eye' class='svg-inline--fa fa-eye fa-w-18 ' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3Cpath fill='white' d='M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z'%3E%3C/path%3E%3C/svg%3E"/>
                        <p>
                            Ver projeto
                        </p>
                    </div>
                </div></a>
            </div>
            <div className="portfolioItemInfo">
                <h1>{props.title}</h1>
                <small>{props.type}</small>
            </div>
        </div>
    );
}
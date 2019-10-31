import React from 'react';
import { Card } from 'react-bootstrap';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import '../styles/ResultDayItemCard.css';

export default class ResultDayItemCard extends React.Component {
    render() {
        return(
            <div>
                <Card>
                    <Card.Title> card title 
                        <i> <button id="delete"> <FontAwesomeIcon icon={faTrash}/> </button> </i>
                        <i> <button id="delete"> <FontAwesomeIcon icon={faPencilAlt}/> </button> </i>
                    </Card.Title>
                    <Card.Img top width ="100%" src="http://picsum.photos/300/200" alt="Card image cap"/>
                </Card>
            </div>
        )
    }
}
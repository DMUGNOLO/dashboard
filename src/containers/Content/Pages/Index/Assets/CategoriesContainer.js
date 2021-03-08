import React from 'react';
import Categories from './Categories';
import Row from 'react-bootstrap/Row';
import '../../../../app.css';

export default function CategoriesContainer(){
    return(
        <Row>
            <Categories />
        </Row>
    );
}
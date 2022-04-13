import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const GridSystem = ({ colCount, children, md }) => {
    let rowCount = Math.floor(children.length / colCount) + 1;
    let idx = 0;

    const buildGrid = () => {
        return (
            renderRows()
        )
    }

    const renderRows = () => {
        let rows = []

        for (let i = 0; i < rowCount; i++) {
            rows.push(
                <Row className='Row'>
                    {
                        renderCols()
                    }
                </Row>
            )
        }

        return rows
    }

    const renderCols = () => {
        let cols = []

        for (let i = 0; i < colCount; i++) {
            if (idx < children.length) {
                cols.push(
                    <Col className='Col'>
                        {
                            children[idx]
                        }
                    </Col>
                )
                idx++;
            }
        }

        return cols
    }

    return (
        <Container className='Container'>
            {
                buildGrid()
            }
        </Container>
    );
};

export default GridSystem;
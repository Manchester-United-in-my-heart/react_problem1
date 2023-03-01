// @flow
import * as React from 'react';

export function Card(props) {
    let id = props.props.id;
    let list = props.props.list;
    let list_item = list.map(chunk => {
        return chunk;
    })
    return (
        <div>
            <div style={
                {marginTop: "2rem", border: "solid 2px", padding: "2rem"}}>

                {/*Header*/}

                <div style={
                    {fontSize: "2rem", display: "flex", justifyContent: "center"}}>
                    Address Page {id}
                </div>

                {/*Content*/}
                <div>
                    Delivered To:

                    <ul style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        {
                            list_item.map((smaller_chunk) =>
                                <li>{smaller_chunk}</li>
                            )
                        }
                    </ul>
                </div>
            </div>

        </div>
    );
};
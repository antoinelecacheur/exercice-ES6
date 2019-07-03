import React from 'react'
import monObjetAExporter from './../MonExport';

export default class ExempleImport extends React.Component {
    render() {
        return(
            <div>
                <span>Mon objet importé depuis loin : {monObjetAExporter}</span>
            </div>
        )
    }
}
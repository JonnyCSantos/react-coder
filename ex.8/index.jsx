import React from 'react'
import ReactDom from 'react-dom'
import ClassComponent from './classComponent'

ReactDom.render(
    <div>
        <ClassComponent value='Olá React!'/>
    </div>
, document.getElementById('app'))
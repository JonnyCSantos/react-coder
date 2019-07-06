import React from 'react'
import ReactDom from 'react-dom'
import ClassComponent from './classComponent'

ReactDom.render(
    <div>
        <ClassComponent label='Contador' initialValue={10}/>
    </div>
, document.getElementById('app'))
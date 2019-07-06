import React from 'react'
import ReactDom from 'react-dom'
import Field from './field'

ReactDom.render(
    <div>
        <Field initialValue={10}/>
    </div>
, document.getElementById('app'))
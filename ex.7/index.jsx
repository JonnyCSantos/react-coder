import React from 'react'
import ReactDom from 'react-dom'
import Family from './Family'
import Member from './member'

ReactDom.render(
    <div>
        <Family lastName='Santos'>
            <Member name='Cesar'/>
            <Member name='Sueli'/>
            <Member name='Thiago'/>
            <Member name='Jonathan'/>
            <Member name='Matheus'/>
        </Family>
    </div>
, document.getElementById('app'))
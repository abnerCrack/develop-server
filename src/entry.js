import React, {Component} from 'react';

// ci
export default class Layout extends Component {
    render(){
        return <div>
            <header>
                Talent UI 开发服务器
            </header>
            <div className='page-container'>
            {this.props.children}
            </div>
        </div>
    }
}
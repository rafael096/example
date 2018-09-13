import React from 'react';
import {setLocale} from "../store/action";
import {FormattedMessage} from "react-intl";
import {connect} from "react-redux";
import Link from 'next/link';


class Main extends React.Component {


    render() {
        return (

                <div >
                    <FormattedMessage id="div.hello" defaultmessage="hello"/>
                    <Link herf='/el'>
                      <a onClick={() => this.props.setLocale("el")}>Click me</a>
                    </Link>

                </div>


        )
    }

}

export default connect(null,{setLocale}, null)(Main);
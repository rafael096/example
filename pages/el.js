import React, {Component} from "react";
import {connect} from "react-redux";
import {IntlProvider} from "react-intl";
import messages from '../messages';
import Home from './Home';



class Page extends Component {

    render() {
        const {lang} = this.props;


        return (

            <IntlProvider locale={lang} messages={messages[lang]}>
                <Home/>
            </IntlProvider>
        )
    }
}
function mapStateToProps(state) {
    return {
        lang: state.lang,

    };
}
export default connect(mapStateToProps)(Page);
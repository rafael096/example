import React from "react";
import {Provider} from "react-redux";
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";
import {makeStore} from '../store/store';
import { addLocaleData } from "react-intl";


class MyApp extends App {


    static getInitialProps({Component,store}) {

        const pageProps = Component.getInitialProps(store);
        return {pageProps};
    }

    render() {

        const {Component, pageProps} = this.props;

        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }

}

export default withRedux(makeStore,({debug:true}))(MyApp);
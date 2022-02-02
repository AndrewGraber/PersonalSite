import React from 'react';

import { ParallaxProvider } from 'react-scroll-parallax';
import { Authenticator } from '@aws-amplify/ui-react';

import MainComponent from './MainComponent';

class AuthenticatorWrapper extends React.Component {
    render() {
        return (
            <Authenticator>
                {({ signOut, user }) => (
                    <div>
                        <MainComponent />
                        <button onClick={signOut}>Sign out</button>
                    </div>
                )}
            </Authenticator>
        );
    }

    componentDidMount() {
        setTimeout(() => document.querySelector('div.loading-veil').classList.add('loaded'), 250);
    }
}

export default AuthenticatorWrapper;
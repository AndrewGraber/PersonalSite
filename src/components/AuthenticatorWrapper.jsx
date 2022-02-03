import React from 'react';

import { ParallaxProvider } from 'react-scroll-parallax';
import { Authenticator } from '@aws-amplify/ui-react';

import MainComponent from './MainComponent';

/*<Authenticator>
                {({ signOut, user }) => (
                    <div>
                        <MainComponent />
                        <button onClick={signOut}>Sign out</button>
                    </div>
                )}
            </Authenticator>*/

class AuthenticatorWrapper extends React.Component {
    render() {
        return (
            <MainComponent />
        );
    }

    componentDidMount() {
        setTimeout(() => document.querySelector('div.loading-veil').classList.add('loaded'), 250);
    }
}

export default AuthenticatorWrapper;
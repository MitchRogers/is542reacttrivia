import React from 'react';
import { useSpring, animated, config } from 'react-spring';

function Title() {
    const titleStyle = useSpring({
        from : { opacity: 0, color: 'rgb(233, 193, 84)', fontSize: '11px', paddingBottom: '600px' },
        to : { opacity: 1, color: 'rgb(211, 175, 78)', fontSize: '88px', fontWeigth: 'bold', paddingBottom: '0px' },
        config : { duration: 1000 }
    })
    return (
        <animated.div style={ titleStyle }>
            Trivia Game
        </animated.div>
    )
}

export default Title;
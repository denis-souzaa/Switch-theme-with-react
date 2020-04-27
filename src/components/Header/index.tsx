import React, { useContext } from 'react';

import { shade } from 'polished';

import { ThemeContext } from 'styled-components';

import Switch from 'react-switch';

import { Container } from './style';

interface Props{
    toogleTheme(): void;
}

const Header: React.FC<Props> = ({toogleTheme}) =>{

    const { colors, title } = useContext(ThemeContext);

    return (
        <Container>
            Hello World

            <Switch 
                onChange={toogleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                onColor={colors.secondary}
                offColor={shade(0.15, colors.primary)}
            />

        </Container>
    );
}

export default Header;
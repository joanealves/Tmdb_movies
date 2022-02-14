import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

import * as S from './styles'

const Header = () => {
    return (
        <S.HeaderContainer>
            <Link to="/">
            <S.HeaderLogo src={logo} alt='Ilustração logomarca do site' />
            </Link>
        </S.HeaderContainer>
    )
}

export default Header
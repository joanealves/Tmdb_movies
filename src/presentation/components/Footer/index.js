import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'


import * as S from './styles'

const Footer = () => {
    return (
        <S.FooterContainer>
            <Link to="/">
                <S.FooterLogo src={logo}/>
            </Link>
        </S.FooterContainer>
    )
}

export default Footer
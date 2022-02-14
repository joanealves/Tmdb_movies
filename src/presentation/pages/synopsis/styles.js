import styled, { css } from 'styled-components'
import { COLORS } from '../../constants/colors'

const desktopFlex = `
    @media (min-width: 1024px) {
        display: flex;
        justify-content: flex-start;
        padding: 74px 216px 0px 112px;
        padding-right: 0;
        height: 600px;
    }
`

const partialOneCircule = ` 
    border-top: 6px solid ${COLORS.green};
`
const partialTwoCircule = `
    border-top: 6px solid ${COLORS.green};
    border-right: 6px solid ${COLORS.green};
`
const partialLastCircule = `
    border-top: 6px solid ${COLORS.green};
    border-right: 6px solid ${COLORS.green};
    border-bottom: 6px solid ${COLORS.green};
`

const totalCircule = `
    border-top: 6px solid ${COLORS.green};
    border-right: 6px solid ${COLORS.green};
    border-left: 6px solid ${COLORS.green};
    border-bottom: 6px solid ${COLORS.green};
`

const setBorderCircule = props => {
    let css = ''
    if (props.options === 'partialOneCircule') return css += partialOneCircule
    if (props.options === 'partialTwoCircule') return css += partialTwoCircule
    if (props.options === 'partialLastCircule') return css += partialLastCircule
    if (props.options === 'totalCircule') return css += totalCircule

    return css
}


const desktopSecondConteiner = `
    @media (min-width: 1024px) {
        padding: 80px 112px 36px 112px;
    }
`

export const SinopseConteiner = styled.section`
    background: ${COLORS.purple2d};
    color: ${COLORS.white};
    padding: 40px 16px;
    ${props => props.desktopSecondConteiner && desktopSecondConteiner}
    ${props => props.desktopFlex && desktopFlex}
    ${props =>
        props.secondSection &&
        css`
      background: ${COLORS.white};
      color: ${COLORS.black};
    `};
`

export const PosterMovieConteiner = styled.div`
        text-align: center;
    @media (min-width: 1024px) {
        margin-bottom: -170px;
    }
    
`

export const PosterMovie = styled.img`
        max-width: 200px;
   @media (min-width: 1024px) {
        width: 383px;
        height: 574px;
        margin-right: 32px;
        max-width: inherit;
    }
`

export const DescriptionHeader = styled.div`
    margin-top: 3px;
    @media (min-width: 1024px) {
        display: flex;
        flex-wrap: wrap;
    }
`

export const DescriptionConteiner = styled.div`
    overflow-y: auto;
    margin-top: 16px;
`

export const Description = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    font-style: normal;
    white-space: nowrap;
`

export const AssessmentConteiner = styled.div`
    margin-top: 32px;
    margin-bottom: 32px;
    @media (min-width: 1024px) {
        display: flex;
        align-items: center;
    }
`

export const Percentage = styled.div`
    margin-right: 12px;
    width: 60px;
    height: 60px;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    border-radius: 50%;
    justify-content: center;
`

export const BorderGreen = styled.div`
    width: 60px;
    height: 60px;
    border: 6px solid rgb(0, 0, 0, 0);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${props => props.options && setBorderCircule(props)};
`

export const DescriptionText = styled.p`
    font-weight: 400;
    margin-top: 16px;
    margin-bottom: 32px;

`

export const CharacterConteiner = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;

`

export const CharactersContents = styled.div`
    width: 45%;
    margin-bottom: 23px;
`

export const CastCardsConteiner = styled.div`
    margin-top: 16px;
    margin-bottom: 24px;
    display: flex;
    gap: 16px;
    overflow-x: auto;
`

export const CardContent = styled.div`
    width: 191px;
    padding: 8px;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 32px;
`

export const ImageCast = styled.img`
    width: 175px;
    height: 222px;
`

export const TrailerConteiner = styled.div`
    margin-top: 40px;
    margin-bottom: 24px;
`

export const TeaserImgConteiner = styled.div`
    width: 100%;
    margin-bottom: 32px;
`
export const Teaser = styled.img`
    margin-top: 24px;
    width: inherit;
`

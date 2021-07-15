import { createGlobalStyle } from 'styled-components'
import { lightTheme } from '../../styles/DesignStystem/Theme'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: ${({ theme }) => theme.fonts.nunito};
        font-size: ${({ theme }) => theme.size.medium}; 
    }
    html{
        @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}){
            font-size: 93.75%;
        }
        @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}){
           font-size: 87.5%;
        }
    }
    body{
        background-color: ${({ theme }) => theme.mode.background.main};
        color: ${({ theme }) => theme.mode.text.primary};
        transition: all 0.4s ${({ theme }) => theme.transitions.easeInOut};
    }
    body::-webkit-scrollbar{
        width: ${({ theme }) => theme.size.xs};
        background-color: ${({ theme }) => theme.colors.scrollbar.background};
    }
    body::-webkit-scrollbar-thumb{
       border-radius: ${({ theme }) => theme.size.xs};
       background-color: ${({ theme }) => theme.colors.scrollbar.thump};
    }
    body::-webkit-scrollbar-track{
        border-radius: ${({ theme }) => theme.size.xs};
        background-color: ${({ theme }) => theme.colors.scrollbar.track};
    }
    button{
        background-color: ${({ theme }) => theme.colors.primary.main};
        padding: ${({ theme }) => theme.spacing.xxs} ${({ theme }) =>
  theme.spacing.md}; 
        cursor: pointer;    
        display: inline-block; 
        text-transform: uppercase; 
        font-size: ${({ theme }) => theme.size.sm};
        color: ${({ theme }) => theme.colors.white};
        @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}){
            padding: ${({ theme }) => theme.spacing.xxs} ${({ theme }) =>
  theme.spacing.sm};
        }
        @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}){
            padding: ${({ theme }) => theme.spacing.xxs} ${({ theme }) =>
  theme.spacing.xxs};
        }
    }
    a{
        color: ${({ theme }) => theme.mode.text.primary};
        font-size: ${({ theme }) => theme.size.sm};
        transition: all 0.4s ${({ theme }) => theme.transitions.easeInOut};
        &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
        @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}){
            font-size: ${({ theme }) => theme.size.xs};
        }
    }
    h1{
        font-weight: ${({ theme }) => theme.weight.light};
        font-size: ${({ theme }) => theme.size.xxl};
        line-height: 1.2;
        letter-spacing: -0.01562rem ;
        @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}){
            font-size: ${({ theme }) => theme.size.xl};
        }
        @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}){
            font-size: ${({ theme }) => theme.size.lg};
        }
    }
    h2{
        font-weight: ${({ theme }) => theme.weight.light};
        font-size: ${({ theme }) => theme.size.xl};
        line-height: 1.2;
        letter-spacing: -0.00833rem ;
        @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}){
            font-size: ${({ theme }) => theme.size.lg};
        }
        @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}){
            font-size: ${({ theme }) => theme.size.md};
        }
    }
    h3{
        font-weight: ${({ theme }) => theme.weight.regular};
        font-size: ${({ theme }) => theme.size.lg};
        line-height: 1.167;
        letter-spacing: 0rem ;
        @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}){
            font-size: ${({ theme }) => theme.size.md};
        }
        @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}){
            font-size: ${({ theme }) => theme.size.sm};
        }
    }
    h4{
        font-weight: ${({ theme }) => theme.weight.regular};
        font-size: ${({ theme }) => theme.size.md};
        line-height: 1.235;
        letter-spacing: 0.00735rem ;
        @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}){
            font-size: ${({ theme }) => theme.size.sm};
        }
        @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}){
            font-size: ${({ theme }) => theme.size.xs};
        }
    }
    h5{
        font-weight: ${({ theme }) => theme.weight.regular};
        font-size: ${({ theme }) => theme.size.sm};
        line-height: 1.334;
        letter-spacing: 0rem ;
        @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}){
            font-size: ${({ theme }) => theme.size.xs};
        }
        @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}){
            font-size: ${({ theme }) => theme.size.xxs};
        }
    }
    span{
        font-size: ${({ theme }) => theme.size.xxl}; 
         @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}){
            font-size: ${({ theme }) => theme.size.xl};
        }
        @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}){
            font-size: ${({ theme }) => theme.size.lg};
        }
    }
    p{
        font-size: ${({ theme }) => theme.size.xs};         
    }
    textarea{
        max-width: 100%;
    }
    svg {
        padding: ${({ theme }) => theme.spacing.xxs};
        font-size: ${({ theme }) => theme.spacing.md};
        @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
            font-size: ${({ theme }) => theme.size.xl};
        }
        @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
            font-size: ${({ theme }) => theme.size.lg};
        }
    }
    .iDetilsStyled {
        color: ${({ theme }) => theme.colors.grey.main};
        padding: ${({ theme }) => theme.spacing.xxs};
        border: 2px solid ${({ theme }) => theme.mode.border.main};
        border-radius: 50%;
      &:hover {
        border-color: ${({ theme }) => theme.colors.secondary.main};;
        color: ${({ theme }) => theme.colors.secondary.main};
      }
    }
    .iGithubStyled {
        color: ${({ theme }) => theme.colors.grey.main};
        padding: ${({ theme }) => theme.spacing.xxs};
        border: 2px solid ${({ theme }) => theme.mode.border.main};
        border-radius: 50%;
        &:hover {
        border-color: ${({ theme }) =>
          theme == lightTheme ? '#171515' : '#fffafa '};
        color: ${({ theme }) => (theme == lightTheme ? '#171515' : '#fffafa ')};
        }
    }
    .iLinkedinStyled {
        color: ${({ theme }) => theme.colors.grey.main};
        padding: ${({ theme }) => theme.spacing.xxs};
        border: 2px solid ${({ theme }) => theme.mode.border.main};
        border-radius: 50%;
        &:hover {
        border-color: #0e76a8;
        color: #0e76a8;
        }
    }

`

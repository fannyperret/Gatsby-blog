import styled from "styled-components";

export const FooterWrapper = styled.footer`
    grid-column: 2 / span 12;
    min-height: 11.25rem;
    padding: 3rem 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }
`

export const FooterSocialWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;

    & p {
        text-align: center;
        flex: 0 0 100%;
    }
`

export const FooterSocialIcons = styled.div`
    flex: 0 0 100%;
    margin-bottom: 2rem;

    & img {
        height: 30px;
        padding: 0 1rem;
        transition: filter 0.3s ease;
        // filter: invert(25%) sepia(47%) saturate(326%) hue-rotate(131deg) brightness(97%) contrast(91%);
        filter: invert(57%) sepia(14%) saturate(506%) hue-rotate(169deg) brightness(89%) contrast(83%);
    }

    & img:hover, img:focus {
        filter: brightness(50%);
    }
`
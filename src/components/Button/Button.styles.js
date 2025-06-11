import styled from 'styled-components';

export const PinkButton = styled.button`
    background-color: ${props => props.theme.colours.pink};
    color: #fff;
    border: none;
    padding: 0.75em 1.5em;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
        background-color: ${props => props.theme.colours.darkPink};
    }
`;
import styled from 'styled-components';

const PinkButton = styled.a`
    display: inline-block;
    background-color: #ff69b4;
    color: #fff;
    border: 2px solid #ffb6c1;
    padding: 0.75em 1.5em;
    border-radius: 32px;
    font-size: 1rem;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.2s, border-color 0.2s;

    &:hover {
        background-color: #ffb6c1;
        border-color: #ff69b4;
        color: #ff69b4;
    }
`;

// Wrapper component to handle onClick
const PinkButtonWithClick = () => (
    <PinkButton
        target="_blank"
        href="https://widget.treatwell.co.uk/place/396704/menu/"
    >
        Book Now
    </PinkButton>
);

export default PinkButtonWithClick;
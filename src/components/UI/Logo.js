import styled from 'styled-components';

//Components
import Logo from '../../images/Logo.png'

export default function LogoComponent() {
    return (
        <Wrapper>
            <img src={Logo} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    justify-content: center;
    align-items: center;
    & img {
        height: 250px;
        border-radius: 100%;
        border: solid 2px;
        @media (max-width: 784px) {
            position: relative;
            bottom: 5rem;
            left: 1rem;
            height: 200px;
            width: 200px;
        }
        @media (max-width: 534px) {
            position: relative;
            bottom: 3.7rem;
            left: 0rem;
            height: 150px;
            width: 150px;
        }
        @media (max-width: 425px) {
            position: relative;
            bottom: 2rem;
            left: -1rem;
            height: 140px;
            width: 140px;
        }
        @media (max-width: 320px) {
            position: relative;
            bottom: 2rem;
            left: -1rem;
            height: 120px;
            width: 120px;
        }
    }
`;
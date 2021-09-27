import styled from 'styled-components';

//Styles
import GlobalStyle from './GlobalStyle'

//Components
import Header from '../Header';
import Footer from '../Footer';

export default function Layout({children}) {

    return (
        <Wrapper>
            <GlobalStyle/>
            <Header/>
                <Main>
                    {children}
                </Main>
            <Footer/>
        </Wrapper>
    )
}


const Wrapper = styled.div`

`;

const Main = styled.div`
    min-height: calc(100vh - 14rem);
`;

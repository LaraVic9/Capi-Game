import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {  Title } from '../../components/common';

const AboutUsPage = () => {

    return (
        <AboutUsPageWrapper>
            <div className='sc-aboutus section'>
                <div className='container'> 
                    <Title titleName={{
                        firstText: "our",
                        secondText: "team"
                    }}/>
                </div>
            </div>
        </AboutUsPageWrapper>
    )
}

export default AboutUsPage;

const AboutUsPageWrapper = styled.div`
background-color: var(--clr-violet-dark-active);
.sc-aboutus{
    min-height: 100vh;
    padding-top: 65px;
}
`
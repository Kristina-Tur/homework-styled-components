import React from 'react';
import './App.css';
import styled from 'styled-components';
import {myTheme} from './styles/Theme.styled';
import rectangle from './assets/images/rectangle-1.png'
import {Simulate} from 'react-dom/test-utils';
import submit = Simulate.submit;

function App() {
    return (
        <div className="App">
            <Container>
                <Box>
                    <Img src={rectangle} alt={'Rectangle'}/>
                    <Wrapper>
                    <Title>Headline</Title>
                    <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
                    <Button>See more</Button>
                    <Form>
                        <Input type={'submit'} value={'Save'}/>
                    </Form>
                    </Wrapper>
                </Box>
            </Container>
        </div>
    );
}

export default App;

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 350px;
  background-color: ${myTheme.colors.primary};
  border-radius: 15px;
`
const Img = styled.img`
    margin-bottom: 20px;
`

const Wrapper = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`



const Title = styled.h1`

`

const Text = styled.p`

`

const Button = styled.button`

`

const Form = styled.form`

`

const Input = styled.input`
    
    `
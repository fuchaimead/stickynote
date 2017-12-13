import React from 'react';
import StickyForm from './components/StickyForm';
import StickyList from './components/StickyList';
import Footer from './components/Footer';
import { Container, Header } from 'semantic-ui-react';

const App = () => ( 
  <Container>
    <Header as='h1' color='olive'> Sticky Note App </Header> 
    <StickyForm />
    <StickyList />
    <Footer />
 </Container>
)


export default App;
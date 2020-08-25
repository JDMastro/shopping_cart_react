import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import Products from './components/products'

//

/*function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: 'pink' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}*/

function App() {
  return (
    <div className="App">
      <Header/>
      <Products />
      <Footer/>

{/*<Accordion>
          <CustomToggle eventKey="0">Click me!</CustomToggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      
    </Accordion>*/}
    </div>
  );
}

export default App;

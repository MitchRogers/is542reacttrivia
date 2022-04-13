import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col'
import { useState } from 'react';
import { faPalette, faTheaterMasks, faLandmark, faBasketballBall, faArrowRight } from '@fortawesome/free-solid-svg-icons';


// COMPONENTS
import Category from './components/Category';
import QuestionCard from './components/QuestionCard';
import Result from './components/Result';
import Title from './components/Title';
import HighScorePanel from './components/HighScorePanel';
import Resize from './components/Resize';

// DATA
import questionsArt from './data/art.json';
import questionsEntertainment from './data/entertainment.json';
import questionsSports from './data/sports.json';
import questionsHistory from './data/history.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
  const [category, setCategory] = useState(null);
  const [questions, setQuestions] = useState([]); 

  const CATEGORIES = {
    art : {
      name : 'Art', 
      icon : faPalette,
      color : 'green',
    },

    entertainment : {
      name : 'Entertainment', 
      icon : faTheaterMasks, 
      color : 'red',
    },

    history : {
      name : 'History', 
      icon : faLandmark, 
      color : 'yellow',
    },

    sports : {
      name : 'Sports', 
      icon : faBasketballBall, 
      color : 'dodgerblue',
    },
  }

  const setCurrentCategory = category => {
    setCategory(category);

    switch (category.name) {
      case CATEGORIES.art.name : 
        setQuestions(questionsArt);
        break;
      case CATEGORIES.entertainment.name : 
        setQuestions(questionsEntertainment);
        break;
      case CATEGORIES.history.name :
        setQuestions(questionsHistory);
        break;
      case CATEGORIES.sports.name : 
        setQuestions(questionsSports);
        break;
    }
  };

  return (
    <Container>
        <Row className="mt-5 mb-2">
            <Column className="text-center">
              <Title onClick={() => setCategory(null)}>Trivia Game</Title>
            </Column>
        </Row>
        {category ? (
            <>
                <Row className="d-flex justify-content-center mb-4">
                    <Column md={4} className="text-center">
                        <Category category={category} size="sm" onSelect={setCurrentCategory} />
                    </Column>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Column md={4} className="text-center">
                        <QuestionCard questions={questions} />
                    </Column>
                </Row>
            </>
        ) : (
            <>
                {Object.values(CATEGORIES).map((c, i) => (
                    <Row key={i} className="d-flex justify-content-center mb-5">
                      <Column md={4}>
                          <Category category={c} onSelect={ setCurrentCategory } />
                      </Column>
                    </Row>
                ))}
            </>
        )}
        {/* <Resize /> */}
    </Container>
  );
}

export default App;

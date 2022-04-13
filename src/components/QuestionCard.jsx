import { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import classNames from 'classnames';
import Result from './Result'

const reorderAnswers = question => {
    const answers = [question.correct, ...question.incorrect];

    for (let i = 0; i < answers.length; i++) {
        const randomNum = Math.floor(Math.random() * i);
        const temp = answers[i];
        answers[i] = answers[randomNum];
        answers[randomNum] = temp;
    }

    return answers;
};

function QuestionCard({ questions }) {
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    const [answers, setAnswers] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [countCorrectAnswers, setCountCorrectAnswers] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        const question = questions[currentQuestionIdx];
        setCurrentQuestion(question);
        setAnswers(reorderAnswers(question));
    }, [currentQuestionIdx]);

    const selectAnswer = answer => {
        setIsSubmitting(true);
        setSelectedAnswer(answer);

        if (answer === currentQuestion.correct) {
            setCountCorrectAnswers(countCorrectAnswers + 1);
        }

        setTimeout(() => {
            const newQuestionIdx = currentQuestionIdx + 1;

            if (newQuestionIdx === questions.length) {
                setIsDone(true);
            } else {
                setCurrentQuestionIdx(newQuestionIdx);
                setIsSubmitting(false);
                setSelectedAnswer(null);
            }
        }, 1000);
    };

    if (isDone) {
        return <Result countCorrectAnswers={ countCorrectAnswers } />
    }

    return (
        <>
            <div>
                { currentQuestionIdx + 1 } / { questions.length }
            </div>
            <div className='mb-4'>
                <strong dangerouslySetInnerHTML={{ __html : currentQuestion.question }} />
            </div>
            <div className='mb-4'>
                <ListGroup className={ classNames({ disabled: isSubmitting })}>
                    { answers.map((a, i) => {
                        const isSelectedAndSubmitting = isSubmitting && a === selectedAnswer;

                        return (
                            <ListGroup.Item 
                                key={ i }
                                className={ classNames({
                                    correct :
                                        isSelectedAndSubmitting && a === currentQuestion.correct,
                                    incorrect :
                                        isSelectedAndSubmitting && a !== currentQuestion.correct, 
                                })}
                                onClick={() => selectAnswer(a)}
                            >
                                <span dangerouslySetInnerHTML={{ __html : a}} />
                            </ListGroup.Item>
                        );
                    })}
                </ListGroup>
            </div>
        </>
    );
}

export default QuestionCard;
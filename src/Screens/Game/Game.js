import React, { useState, useEffect } from 'react';
import { FaQuestion } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { IoReloadCircleSharp } from 'react-icons/io5';
import PrimaryButton from '../../Components/Buttons/PrimaryButton';
import LoginModal from '../../Components/LoginModal/LoginModal';
import ResultModal from '../../Components/ResultModal/ResultModal';
import { closeAll, compare, reload, select } from '../../redux/cardSlice';
import {
  Container,
  Header,
  ScoreContainer,
  Score,
  ScoreInfo,
  Reload,
  Red,
  Green,
  Span,
  CardsContainer,
  Card,
  QuestionMarkCard,
  ImageCard,
} from './GameStyled';

const Game = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});
  const [isFinish, setIsFinish] = useState(false);
  const [isFirst, setIsFirst] = useState(true);
  const dispatch = useDispatch();
  const list = useSelector((state) => state.cardReducer.cards);
  const selected = useSelector((state) => state.cardReducer.selected);
  const selectedId = useSelector((state) => state.cardReducer.selectedId);
  const totalSelect = useSelector((state) => state.cardReducer.totalSelect);
  const score = useSelector((state) => state.cardReducer.point);
  const found = useSelector((state) => state.cardReducer.found);
  const handleClick = (name, id) => {
    const b = selected;
    if (isOpen) dispatch(select({ name: name, id }));
    if (b !== '') {
      setIsOpen(false);
      setTimeout(() => {
        dispatch(compare({ name: name, id }));
        setIsOpen(true);
      }, 1000);
    }
  };

  const reloadGame = () => {
    dispatch(closeAll());
    setIsOpen(false);
    setTimeout(() => {
      dispatch(reload());
      setIsOpen(true);
    }, 1000);
  };

  useEffect(() => {
    if (found === 15) {
      setIsFinish(true);
    }
  }, [found]);

  return (
    <>
      <Header>
        <div>
          {user.name ? 'Hi ' + user.name + ', l' : 'L'}et's play a{' '}
          <span style={{ color: '#ba68c8' }}>Memory Game</span>
        </div>
        <PrimaryButton screen='/' text='Go back' />
      </Header>
      <LoginModal
        open={isLogged}
        onClose={() => setIsLogged(true)}
        setUser={setUser}
      />
      {isFinish && (
        <ResultModal
          open={isFinish}
          onClose={() => setIsFinish(false)}
          score={score}
          user={user}
          reload={reloadGame}
          isFirst={isFirst}
          setIsFirst={setIsFirst}
        />
      )}
      <Container>
        <ScoreContainer>
          <Score>
            Your score: <span style={{ color: '#ba68c8' }}>{score}</span>
          </Score>
          <ScoreInfo>
            Your start score is 100. Each correct gives <Green>50</Green>{' '}
            points, each wrong takes <Red>10</Red> points.
          </ScoreInfo>
          <Reload onClick={reloadGame}>
            <IoReloadCircleSharp />
            <Span>Reload Game</Span>
          </Reload>
        </ScoreContainer>
        <CardsContainer>
          {list.map((item, id) => {
            return (
              <Card key={id}>
                <QuestionMarkCard
                  className='test'
                  isOpen={!item.isOpen}
                  onClick={() =>
                    (totalSelect < 2 && isOpen && id !== selectedId) || id === 0 // very weird, check later
                      ? handleClick(item.name, id)
                      : ''
                  }
                >
                  <FaQuestion />
                </QuestionMarkCard>
                <ImageCard isFind={item.isFind} isOpen={item.isOpen}>
                  {item.isOpen && (
                    <img
                      className='noSelect'
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      src={item.name}
                      alt='error'
                    />
                  )}
                </ImageCard>
              </Card>
            );
          })}
        </CardsContainer>
      </Container>
    </>
  );
};

export default Game;

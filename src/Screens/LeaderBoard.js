import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import {
  LeadershipHeader,
  LeadershipSection,
  Profile,
  Score,
} from '../Components/ResultModal/ResultModalStyled';
import PrimaryButton from '../Components/Buttons/PrimaryButton';
import LoadingScreen from '../Components/Loading/LoadingScreen';
import styled from 'styled-components';

function compare(a, b) {
  if (a.score < b.score) {
    return 1;
  }
  if (a.score > b.score) {
    return -1;
  }
  return 0;
}

const ResultModal = () => {
  const [leadership, setLeadership] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const db = getDatabase();

    // Fetch the leaderboard data from Firebase
    const getLeadership = () => {
      const starCountRef = ref(db, 'leadership');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setLeadership(Object.values(data).sort(compare));
        setIsLoaded(true); // set isLoaded to true when the data has been fetched
      });
    };

    getLeadership();
  }, []);

  return (
    <OuterContainer>
      <h1>Scoreboard</h1>
      <Container>
        {isLoaded ? (
          <>
            <PrimaryButton screen='/' text='GoBack' />
            <LeadershipSection>
              <LeadershipHeader>Leadership</LeadershipHeader>
              <Profile
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  paddingTop: 0,
                  border: 'none',
                }}
              >
                Name
                <Score>Score</Score>
              </Profile>
              {leadership &&
                leadership.map(
                  (p, i) =>
                    i < 10 && (
                      <Profile
                        key={i}
                        style={
                          i + 1 === leadership.length
                            ? { borderBottom: '1px dashed #ba68c8' }
                            : {}
                        }
                      >
                        <span
                          style={{
                            fontWeight: 700,
                            marginLeft: '-15px',
                            opacity: 1,
                          }}
                        >
                          {i + 1 + '.'}
                        </span>
                        {' ' + p.name}
                        <Score>{p.score}</Score>
                      </Profile>
                    )
                )}
            </LeadershipSection>
          </>
        ) : (
          <LoadingScreen />
        )}
      </Container>
    </OuterContainer>
  );
};

export default ResultModal;

const Container = styled.div`
  min-width: 80%;
  min-width: 90%;
  background-color: rgba(230, 206, 255);
  padding: 4px 0px 60px;
  height: fit-content;
  position: absolute;
  margin-top: 40px;
  bottom: 0;
  @media only screen and (max-height: 1100px) {
    position: relative;
  }
  @media only screen and (max-width: 1100px) {
    padding: 4px 0px 40px;
  }
  @media only screen and (max-width: 800px) {
    padding: 4px 0px 28px;
  }
  @media only screen and (max-width: 600px) {
    padding: 4px 0px 20px;
  }
`;

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 600px;
  align-items: center;
  justify-content: center;
`;

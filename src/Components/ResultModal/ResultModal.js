import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import {
  Header,
  LeadershipHeader,
  LeadershipSection,
  Button,
  Overlay,
  Modal,
  Profile,
  Score,
} from './ResultModalStyled';

function compare(a, b) {
  if (a.score < b.score) {
    return 1;
  }
  if (a.score > b.score) {
    return -1;
  }
  return 0;
}

const ResultModal = ({ score, onClose, user, reload, isFirst }) => {
  const [leadership, setLeadership] = useState([]);

  useEffect(() => {
    const db = getDatabase();

    const updateLeadership = () => {
      // Push the new game data to the Firebase database
      set(ref(db, 'leadership/' + user.id), {
        name: user.name,
        score,
        id: user.id,
        date: new Date().toISOString(),
      });

      // Fetch the updated leaderboard data from Firebase
      getLeadership(db);
    };

    if (isFirst) {
      // If the user is at the top of the leaderboard, add their score to the database
      updateLeadership();
    } else {
      // If the user is not at the top of the leaderboard, check if their score is higher than the lowest score on the leaderboard
      const starCountRef = ref(db, 'leadership');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        const userIndex = Object.keys(data).findIndex((id) => id === user.id);
        const oldScore = Object.values(data)[userIndex].score;

        if (score > oldScore) {
          // If the user's score is higher than the lowest score, update the database with their new score
          updateLeadership();
        } else {
          // Otherwise, fetch the leaderboard data from Firebase
          getLeadership(db);
        }
      });
    }
  }, []);

  const getLeadership = (db) => {
    // Fetch the leaderboard data from Firebase and update the state
    const starCountRef = ref(db, 'leadership');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setLeadership(Object.values(data).sort(compare));
    });
  };

  const playAgain = () => {
    onClose();
    reload();
  };

  return (
    <>
      <Overlay />
      <Modal>
        <Header>
          Congratulations <span style={{ color: '#ba68c8' }}>{user.name}</span>,
          you have completed the game.
        </Header>
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
                    e={p.id === user.id}
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

          <Profile
            style={{
              border: 'none',
              opacity: 1,
              fontWeight: 700,
              marginLeft: '2px',
            }}
          >
            {user.name}
            <Score>{score}</Score>
          </Profile>
        </LeadershipSection>
        <Button onClick={playAgain}>Play Again</Button>
      </Modal>
    </>
  );
};

export default ResultModal;

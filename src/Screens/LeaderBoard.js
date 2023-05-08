import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import {
  LeadershipHeader,
  LeadershipSection,
  Profile,
  Score,
} from '../Components/ResultModal/ResultModalStyled';
import PrimaryLinkButton from '../Components/Buttons/PrimaryLinkButton';

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

  useEffect(() => {
    const db = getDatabase();

    // Fetch the leaderboard data from Firebase
    const getLeadership = () => {
      const starCountRef = ref(db, 'leadership');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setLeadership(Object.values(data).sort(compare));
      });
    };

    getLeadership();
  }, []);

  return (
    <>
      <PrimaryLinkButton screen='/' text='GoBack' />
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
  );
};

export default ResultModal;

import CountdownContainer from '../../components/Countdown/Countdown';
import './home.css';

function Home() {
  return (
    <>
      <h1>Coucou Charles</h1>
      <p>Il est où le projet 7 terminé ?</p>
      <p>Temps avant notre prochaine session :</p>
      <CountdownContainer />
    </>
  );
}

export default Home;

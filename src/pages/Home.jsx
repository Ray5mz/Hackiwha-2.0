import PurpleContainer from '../components/PurpleContainer';
import Header from '../components/Header';
import Signature from '../components/Signature';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <PurpleContainer>
        <div className="content-area">
          <h1 className="hero-title">Grow Your Skills with LightPass Learning</h1>
          <h2 className="hero-subtitle">Real People. Real Learning. Real Growth</h2>
          <p className="hero-text">
            Education isn't just about school or diplomas — it's a lifelong journey of learning, open to
            everyone. With our community light pass, you grow together, learn together, and discover the
            real meaning of knowledge.
          </p>
          <button className="cta-button" onClick={() => navigate('/login')}>
            sign up and get started
            <span className="arrow">▶</span>
          </button>
        </div>
        <Signature />
      </PurpleContainer>
    </>
  );
}

export default Home;

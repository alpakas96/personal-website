import './Home.css';
import { Intro } from '../components/Intro';
import { ProjectContainer } from '../components/ProjectContainer';
import { ToggleButton } from '../components/TooggleButton';

function Home() {
  return (
    <>
      <ToggleButton />
      <Intro />
      <ProjectContainer />
    </>
  );
}

export default Home;


import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BrandIntro from './components/Brand/BrandIntro';
import InfluencerIntro from './components/Influencer/InfluencerIntro';
import BrandSignUp from './components/Brand/BrandSignUp';
import InfluencerSignUp from './components/Influencer/InfluencerSignUp';

import ManagerSignUp from './components/manager/ManagerSignUp';


const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/BrandIntro" element={<BrandIntro />} />
        <Route path="/InfluencerIntro" element={<InfluencerIntro />} />
        <Route path="/BrandSignUp" element={BrandSignUp} />
        <Route path="/InfluencerSignUp" element={InfluencerSignUp} />
        <Route path="/ManagerSignUp"  element={ManagerSignUp}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

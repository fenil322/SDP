
import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BrandIntro from './components/Brand/BrandIntro';
import InfluencerIntro from './components/Influencer/InfluencerIntro';
import BrandSignUp from './components/Brand/BrandSignUp';
import InfluencerSignUp from './components/Influencer/InfluencerSignUp';
import ManagerSignUp from './components/manager/ManagerSignUp';



import BrandHome from './components/Brand/BrandHome';
import BrandPendingRequest from './components/Brand/BrandPendingRequest'
import BrandConsignments from './components/Brand/BrandConsignments';
import BrandCurrentConsignment from './components/Brand/BrandCurrentConsignment';
import BrandHistory from './components/Brand/BrandHistory';
import BrandLogin from './components/Brand/BrandLogin';

import InfluencerHome from './components/Influencer/InfluencerHome';
import InfluencerProfile from './components/Influencer/InfluencerProfile';
import InfluencerProfileEdit from './components/Influencer/InfluencerProfileEdit';
import InfluencerConsignments from './components/Influencer/InfluencerConsignments';
import InfluencerCurrentConsignments from './components/Influencer/InfluencerCurrentConsignments';
import InfluencerHistory from './components/Influencer/InfluencerHistory';
import InfluencerLogin from './components/Influencer/InfluencerLogin';

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BrandIntro" element={<BrandIntro />} />
        <Route path="/InfluencerIntro" element={<InfluencerIntro />} />
        <Route path="/BrandSignUp" element={<BrandSignUp />} />
        <Route path="/InfluencerSignUp" element={<InfluencerSignUp />} />
        <Route path="/ManagerSignUp" element={<ManagerSignUp />} />
        <Route path='/BrandLogin' element={<BrandLogin/>}/>
        <Route path='/InfluencerLogin' element={<InfluencerLogin/>}/>

        <Route path="/BrandHome" element={<BrandHome />} />
        <Route path="/BrandPendingRequest" element={<BrandPendingRequest />} />
        <Route path="/BrandConsignments" element={<BrandConsignments />} />
        <Route path="/BrandCurrentConsignment" element={<BrandCurrentConsignment />} />
        <Route path="/BrandHistory" element={<BrandHistory />} />

        <Route path="/InfluencerHome" element={<InfluencerHome />} />
        <Route path="/InfluencerProfile" element={<InfluencerProfile />} />
        <Route path="/InfluencerProfileEdit" element={<InfluencerProfileEdit />} />
        <Route path="/InfluencerConsignments" element={<InfluencerConsignments />} />
        <Route path="/InfluencerCurrentConsignments" element={<InfluencerCurrentConsignments />} />
        <Route path="/InfluencerHistory" element={<InfluencerHistory />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;

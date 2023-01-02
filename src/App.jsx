import { Routes, Route } from 'react-router-dom';
import Billing from './pages/Billing';
import Boats from './pages/Boats';
import ChangePassword from './pages/ChangePassword';
import Charges from './pages/Charges/Charges';
import Companies from './pages/Companies';
import Home from './pages/Home/index';
import MyAspirants from './pages/MyApplicants';
import MyProfile from './pages/MyProfile';
import Ports from './pages/Ports';
import ResetPassword from './pages/RestPassword';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/my-applicants" element={<MyAspirants />} />
        <Route path="/boats" element={<Boats />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/charges" element={<Charges />} />
        <Route path="/ports" element={<Ports />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>
    </div>
  );
}

export default App;

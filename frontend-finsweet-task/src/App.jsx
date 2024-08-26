import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import Contact from './pages/ContactUS/Contact';
import Blogs from './pages/Blogs/Blogs';
import AboutSection from './pages/Home/AboutSection';

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contactus" element={<Contact/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/aboutus" element={<AboutSection/>}/>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

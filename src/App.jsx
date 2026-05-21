import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PetFriendlyPage from './pages/PetFriendlyPage'
import AwardsPage from './pages/AwardsPage'
import DestinationPage from './pages/DestinationPage'
import GroupsPage from './pages/GroupsPage'

// Routes mein add karo:

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pet-friendly" element={<PetFriendlyPage />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/rishikesh" element={<DestinationPage city="rishikesh" />} />
          <Route path="/dehradun" element={<DestinationPage city="dehradun" />} />
          <Route path="/varanasi" element={<DestinationPage city="varanasi" />} />
          <Route path="/groups" element={<GroupsPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

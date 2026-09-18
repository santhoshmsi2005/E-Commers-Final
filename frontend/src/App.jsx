import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CopyRights from './components/CopyRights'

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <CopyRights />
    </>
  )
}

export default App
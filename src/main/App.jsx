import './App.css';

import Header from '../common/template/PageTampltes/Header'
import SideBar from '../common/template/PageTampltes/SideBar'
import Messages from '../common/Msg/Messages'

import { BrowserRouter as Router } from 'react-router-dom'

import Footer from '../common/template/PageTampltes/Footer';
import Routes from './Routes';

export default props => {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <SideBar />
        <div className="content-wrapper">
          <Routes/>
        </div>
        <Footer />
        <Messages />
      </div>
    </Router>
  )
}

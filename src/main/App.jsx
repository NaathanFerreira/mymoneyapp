import './App.css';

import Header from '../common/template/PageTampltes/Header'
import SideBar from '../common/template/PageTampltes/SideBar'

import Footer from '../common/template/PageTampltes/Footer';

export default props => {
  return (
    <div className="wrapper">
      <Header/>
      <SideBar/>
      <div className="content-wrapper">
        <h1>Conteúdo</h1>
      </div>
      <Footer/>
    </div>
  )
}

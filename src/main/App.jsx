import './App.css';

import Header from '../common/template/PageTampltes/Header'
import SideBar from '../common/template/PageTampltes/SideBar'

export default props => {
  return (
    <div className="wrapper">
      <Header/>
      <SideBar/>
    </div>
  )
}

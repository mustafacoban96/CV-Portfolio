
import './App.css';
import Navbar from './components/navbar/Navbar';
import { connect } from 'react-redux';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import DownloadFileBtn from './components/downloadFileBtn/DownloadFileBtn';






const App = (props) => {
  
  console.log(process.env.REACT_APP_MY_KEY)
  
  
  return (
    
    <>
     <Navbar/>
    <div className="app">
     
      {
        props.pageValues.about_page && <About/>
      }

      {
        props.pageValues.skill_page && <Skills/>
      }


      {
        props.pageValues.contact_page && <Contact/>
      }
      
    </div>
    <DownloadFileBtn/>
    </>
    
  );
}

const mapStateToProps = state =>{
  return {
    pageValues: state.pageValues
  }
}


export default connect(mapStateToProps)(App);

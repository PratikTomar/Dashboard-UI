import Header from "./Header";
import RightContainer from "./RightContainer";
import Sidebar from "./Sidebar";
import '../styles/Dashboard.css';
import '../styles/Sidebar.css';
import '../styles/Header.css';
import HeaderContent from "./HeaderContent";
import CoreContainer from "./CoreContainer";


const Dashboard = () => {
  return (
    <div className='main-page'>
    
      <HeaderContent/>
 
      <main className="">
        <nav className="sidebar">
          <Sidebar />
        </nav>
        <section className="content">
          <Header />
          <section className='dashboard-right'> 
            <CoreContainer className="core-container" />
            <RightContainer />
          </section>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
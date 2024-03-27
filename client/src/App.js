
import './App.css';
import RegisterMemberForm from './components/RegisterMemberForm';
import MemberListTable from './components/MembersListTable';
import Graph from './components/graph';
import UnVaccinatedMembers from './components/unVaccinatedMembers';
import CreateCoronaEvent from './components/createCoronaEvent';

function App() {
  return (
    <div className="App">
      <div id="first-div" class="dashboard-div"><MemberListTable/></div>
      <div id="second-div" class="dashboard-div"><RegisterMemberForm/></div>
      <div id="third-div" class="dashboard-div"><Graph/></div>
      <div id="fourth-div" class="dashboard-div"><UnVaccinatedMembers/></div>
      <div id="fifth-div" class="dashboard-div">    <CreateCoronaEvent/></div>
  
    </div>
  );
}

export default App;

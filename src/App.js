import { Route, Routes } from 'react-router-dom';
import FirstPage from './pages/FirstPage';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Curriculum from './domains/Curriculum/Curriculum';
import Setting from './domains/Setting/Setting';
import EditCurriDetail from './domains/Curriculum/EditCurriDetail.js';
import CalendarMain from './domains/Calendar/CalendarMain';
import CalendarUpdate from './domains/Calendar/CalendarUpdate';

import Customers from "./domains/Customers/Customers.js";
import CustomerInfo from "./domains/Customers/CustomerInfo.js";
import CustomerEdit from "./domains/Customers/CustomerEdit.js";
import Journal from "./domains/Customers/Journal/Journal.js";
import JournalEdit from "./domains/Customers/Journal/JournalEdit.js";
import Dashboard from './domains/Dashboard/Dashboard.js';
import Commodity from './domains/Commodity/Commodity.js';
import Members from './domains/Members/Members.js';
import MemberInfo from './domains/Members/MemberInfo.js';
import CoachInfo from './domains/Members/CoachInfo.js';
import NewCustomer from './domains/Customers/NewCustomer.js';
import PaymentInfo from './domains/Customers/PaymentInfo.js';
import ProductDetail from './components/product/Detail.js';
import FcHome from './pages/FcHome.js';
import FcDashboard from './domains/forCustomers/FcDashboard.js';
import FcLoginPage from './pages/FcLoginPage';
import FcRegisterPage from './pages/FcRegisterPage';
import FcJournal from "./domains/forCustomers/FcJournal.js";
import JournalTable from "./domains/Customers/Journal/JournalTable";
import NewJournal from "./domains/Customers/Journal/NewJournal.js";
import EditPaymentInfo from "./domains/Customers/EditPaymentInfo";
import CJournalEdit from "./domains/Customers/Journal/CJornalEdit";
import FcJournalView from "./domains/forCustomers/FcJournalView";
import FcConsultView from "./domains/forCustomers/FcCousultView";

import CoachHome from "./pages/CoachHome";
import CoachCommodity from "./domains/forCoachs/Commodity/CoachCommodity";
import CoachProductDetail from "./components/product/CoachDetail";
import CoachCurriculum from './domains/forCoachs/Curriculum/CoachCurriculum';
import CoachEditCurriDetail from "./domains/forCoachs/Curriculum/CoachEditCurriDetail";
import CoachMembers from "./domains/forCoachs/Members/Members";
import CoachMemberInfo from "./domains/forCoachs/Members/MemberInfo";
import CoachInfoforCoach from './domains/forCoachs/Members/CoachInfo';
import CoachCalendar from './domains/forCoachs/Calendar/CoachCalendar';
import CoachDashboard from './domains/forCoachs/Dashboard/CoachDashboard'
import WriteMain from './domains/Curriculum/WriteMain';

const App = () => {
  return (
       
    <Routes>
      {/* <Route path="/" element={<FirstPage />} /> */}
      <Route path="/" element={<LoginPage />} />

      <Route path="/home" element={<Home />} >
        <Route path="/home/login" element={<LoginPage />} />
        <Route path="/home/register" element={<RegisterPage />} />
        <Route path="/home/curriculum/edit" element={<EditCurriDetail />} />
        <Route path="/home/curriculum" element={<Curriculum />} />
        <Route path="/home/setting" element={<Setting />} />
        <Route path="/home/calendar" element={<CalendarMain />}/>
        <Route path="/home/calendar/update" element={<CalendarUpdate />} />
        <Route path="/home/customers" element={<Customers />} />
        <Route path="/home/customers/info" element={<CustomerInfo />} />
        <Route path="/home/customers/infoedit" element={<CustomerEdit />} />
        <Route path="/home/customers/new" element={<NewCustomer />} />
        <Route path="/home/customers/paymentinfo" element={<PaymentInfo />} />
        <Route path="/home/customers/paymentinfo/edit" element={<EditPaymentInfo />} />
        <Route path="/home/journaltable" element={<JournalTable />} />
        <Route path="/home/newjournal" element={<NewJournal />} />
        <Route path="/home/journal" element={<Journal />} />
        <Route path="/home/journal/edit" element={<JournalEdit/>} />
        <Route path="/home/journal/counseledit" element={<CJournalEdit />} />
        <Route path="/home/dashboard" element={<Dashboard />} />
        <Route path="/home/commodity" element={<Commodity />} />
        <Route path="/home/commodity/detail" element={<ProductDetail/>} />
        <Route path="/home/members" element={<Members />} />        
        <Route path="/home/members/info" element={<MemberInfo />} />
        <Route path="/home/members/coachinfo" element={<CoachInfo />} />
        <Route path="/home/write" element={<WriteMain />} />
        
      </Route>

      <Route path="/coach" element={<CoachHome />}>
        <Route path="/coach/login" element={<LoginPage />} />
        <Route path="/coach/register" element={<RegisterPage />} />
        <Route path="/coach/commodity" element={<CoachCommodity />} />
        <Route path="/coach/commodity/detail" element={<CoachProductDetail/>} />
        <Route path="/coach/calendar" element={<CoachCalendar />}/>
        <Route path="/coach/calendar/update" element={<CalendarUpdate />} />
        <Route path="/coach/customers" element={<Customers />} />
        <Route path="/coach/customers/info" element={<CustomerInfo />} />
        <Route path="/coach/customers/infoedit" element={<CustomerEdit />} />
        <Route path="/coach/customers/new" element={<NewCustomer />} />
        <Route path="/coach/customers/paymentinfo" element={<PaymentInfo />} />
        <Route path="/coach/customers/paymentinfo/edit" element={<EditPaymentInfo />} />
        <Route path="/coach/journaltable" element={<JournalTable />} />
        <Route path="/coach/newjournal" element={<NewJournal />} />
        <Route path="/coach/journal" element={<Journal />} />
        <Route path="/coach/journal/edit" element={<JournalEdit/>} />
        <Route path="/coach/journal/counseledit" element={<CJournalEdit />} />
        <Route path="/coach/dashboard" element={<CoachDashboard />} />
        <Route path="/coach/curriculum" element={<CoachCurriculum />} />
        <Route path="/coach/curriculum/edit" element={<CoachEditCurriDetail />} />
        <Route path="/coach/members" element={<CoachMembers />} />        
        <Route path="/coach/members/info" element={<CoachMemberInfo />} />
        <Route path="/coach/members/coachinfo" element={<CoachInfoforCoach />} />
        <Route path="/coach/setting" element={<Setting />} />
      </Route>

      {/* <Route path="/coach" element={<CoachHome />} >
        <Route path="/coach/login" element={<LoginPage />} />
        <Route path="/coach/register" element={<RegisterPage />} />
        <Route path="/coach/curriculum" element={<CoachCurriculum />} />
        <Route path="/coach/setting" element={<Setting />} />
        <Route path="/coach/calendar" element={<CalendarMain />}/>
        <Route path="/coach/calendar/update" element={<CalendarUpdate />} />
        <Route path="/coach/calendar/new" element={<NewCalendar />} />
        <Route path="/coach/customers" element={<Customers />} />
        <Route path="/coach/customers/info" element={<CustomerInfo />} />
        <Route path="/coach/customers/infoedit" element={<CustomerEdit />} />
        <Route path="/coach/customers/new" element={<NewCustomer />} />
        <Route path="/coach/customers/paymentinfo" element={<PaymentInfo />} />
        <Route path="/coach/customers/paymentinfo/edit" element={<EditPaymentInfo />} />
        <Route path="/coach/journaltable" element={<JournalTable />} />
        <Route path="/coach/newjournal" element={<NewJournal />} />
        <Route path="/coach/journal" element={<Journal />} />
        <Route path="/coach/journal/edit" element={<JournalEdit/>} />
        <Route path="/coach/journal/counseledit" element={<CJournalEdit />} />
        <Route path="/coach/dashboard" element={<Dashboard />} />
        <Route path="/coach/commodity" element={<CoachCommodity />} />
        <Route path="/coach/commodity/detail" element={<CoachProductDetail/>} />
        
      </Route> */}

      <Route path="/fc" element={<FcHome />} >
        <Route path="/fc/dashboard" element={<FcDashboard />} />
        <Route path="/fc/journal" element={<FcJournal />} />
        <Route path="/fc/journal/view" element={<FcJournalView />} />
        <Route path="/fc/journal/consultview" element={<FcConsultView />} />
        <Route path="/fc/login" element={<FcLoginPage />} />
        <Route path="/fc/register" element={<FcRegisterPage />} />
      </Route>
    </Routes>
  );
};
export default App;

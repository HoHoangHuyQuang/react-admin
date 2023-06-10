import { CssBaseline } from "@mui/material";
import "./index.css";
import ContactsPage from "./views/Contacts";
import AppSide from "./views/global/Sidebar";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./views/global/ErrorPage";
import HomePage from "./views/Home/Index";
import CreateForm from "./views/Contacts/Create";
import Topbar from "./views/global/Topbar";

function App() {
  return (
    <div className="app">
      <CssBaseline />
      <AppSide />
      <main className="content">
        <Topbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/contacts/create" element={<CreateForm />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

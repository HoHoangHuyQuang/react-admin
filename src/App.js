import { CssBaseline } from "@mui/material";
import "./index.css";
import ContactsPage from "./views/Contacts";
import AppSide from "./views/global/Sidebar";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./views/global/ErrorPage";
import HomePage from "./views/Home/Index";

function App() {
  return (
    <div className="app">
      <CssBaseline />
      <AppSide />
      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

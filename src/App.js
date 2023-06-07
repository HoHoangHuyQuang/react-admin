import { CssBaseline } from "@mui/material";
import "./index.css";
import ContactsPage from "./views/Contacts";
import AppSide from "./views/global/Sidebar";
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <CssBaseline />
      <AppSide />
      <main className="content">
        <Routes>
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

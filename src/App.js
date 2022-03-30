import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/index";
import MainPage from "./views/MainPage/MainPage";
import DetailPage from "./views/DetailPage/DetailPage";
import LoginPage from "./views/LoginPage/LoginPage";
import SignUpPage from "./views/SignUpPage/SignUpPage";
import InterworkPage from "./views/InterworkPage/InterworkPage";
import ExternalPage from "./views/ExternalPage/ExternalPage";
import ReviewHome from "./views/ReviewPage/ReviewHome";
import PartsHome from "./views/PartsPage/PartsHome";
import ReviewRegister from "./views/ReviewPage/ReviewRegister";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail/:showId" element={<DetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/interwork" element={<InterworkPage />} />
          <Route path="/external/:showId" element={<ExternalPage />} />
          <Route path="/review" element={<ReviewHome />} />
          <Route path="/parts" element={<PartsHome />} />
          <Route path="/review/register" element={<ReviewRegister />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

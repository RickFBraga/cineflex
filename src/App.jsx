import Header from "./components/Header";
import Order from "./components/order/Order";
import Movies from "./components/poster/Movies";
import Seats from "./components/seats/Seats";
import Sessions from "./components/sessions/Sessions";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/sessions/:movieId" element={<Sessions />} />
        <Route path="/seats/:movieId" element={<Seats />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

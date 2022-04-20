import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Discover, User, Footer, HowItWorks, Header, Contact, Signin, Signup } from "./containers";
import { Navbar } from "./components";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>\

          <Route path="/" element={<Header />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user" element={<User/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

import Header from "../components/Header";
import Footer from "../components/Footer";
import "../Styles/loginSignUp.less";
import React from "react";
export default function LoginLayout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <div className="login-main">{children}</div>
      <Footer />
    </div>
  );
}

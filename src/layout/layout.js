import Footer from "@/comman-component/footer";
import Navbar from "@/comman-component/navbar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div >

      <Navbar></Navbar>
      <main >{children}</main>
      <Footer></Footer>

    </div>
  );
}

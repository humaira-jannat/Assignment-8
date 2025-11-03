import React from "react"; 
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
 import Loading from "../../components/Loading/Loading";
 const Root = () => { const navigation = useNavigation();
 const isLoading = navigation.state !== "idle";
 return ( <div className="flex flex-col min-h-screen bg-[#0b2940] text-white">
   <Navbar />
    <main className="flex-grow"> {isLoading ?
     <Loading /> :
      <Outlet />} 
      </main>
       <Footer />
     </div> 
     ); 
    }; 
export default Root;
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import RightNav from "../components/layout-component/RightNav";
import Navbar from "../components/Navbar";

 
 const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-10/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-10/12 mx-auto py-2">
            <Navbar></Navbar>
            </nav>
            <main className="w-10/12 mx-auto pt-5 grid md:grid-cols-12">
               <aside className="left col-span-3">
                <LeftNavbar></LeftNavbar>
               </aside>
               <section className="col-span-6">
                <Outlet/>


               </section>
               <aside className="right col-span-3">
                  <RightNav></RightNav>
               </aside>
            </main>
        </div>
    );
 };
 
 export default HomeLayout;
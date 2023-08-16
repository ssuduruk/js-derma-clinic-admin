import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children, isMainPage = true }: { children: React.ReactNode, isMainPage?: boolean }) => {
	return (
		<>
			<Navbar isMainPage={isMainPage}/>
			<main className="mt-20">{children}</main>
      <footer className="h-10 bg-black">
        Footer goes here
      </footer>
		</>
	);
};

export default Layout;
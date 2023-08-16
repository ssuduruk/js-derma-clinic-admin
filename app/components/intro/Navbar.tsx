import Link from "next/link";

const Navbar = ({ isMainPage = true }: { isMainPage?: boolean }) => {
	return (
		<header className="fixed top-0 w-full">
			<div className="h-20 py-3 px-10 flex items-center justify-between border border-black">
				<Link href="/">
					<div className="border border-black h-[50px] w-[100px]"></div>
				</Link>
				<nav>
					<ul className="flex gap-10">
						<li>
							<a className="p-2" href={isMainPage ? '#hero' : '/'}>
								HOME
							</a>
						</li>
						<li>
							<a className="p-2" href={isMainPage ? '#about-us' : '/#about-us'}>
								ABOUT US
							</a>
						</li>
						<li>
							<a className="p-2" href={isMainPage ? '#services' : '/#services'}>
								SERVICES
							</a>
						</li>
						<li>
							<a className="p-2" href={isMainPage ? '#contact' : '/#contact'}>
								CONTACT US
							</a>
						</li>
					</ul>
				</nav>
				<Link href="/reservation">
					<button className="border border-black p-2">Make Reservation</button>
				</Link>
			</div>
		</header>
	);
};

export default Navbar;

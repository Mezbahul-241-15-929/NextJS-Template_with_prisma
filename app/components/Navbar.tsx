import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <header className="max-h-full max-w-8xl bg-amber-200 flex justify-between p-4">
                <div>
                    <Link href="/">Logo</Link>
                </div>
                <div >
                    <nav className="flex gap-10">
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </nav>
                </div>
                <div>
                    <Link href="/login">Login</Link>
                </div>

                
            </header>
        </div>
    );
};

export default Navbar;
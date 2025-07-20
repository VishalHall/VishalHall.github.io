import { Roboto, Varela_Round } from "next/font/google";
import Providers from "./providers";
import Navbar from "./navbar";
import Footer from "./footer";

const varelaRound = Varela_Round({
    variable: "--font-varela-round",
    weight: "400",
    subsets: ["latin"],
});
const roboto = Roboto({
    variable: "--font-roboto",
    weight: "400",
    subsets: ["latin"],
});

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div
            className={`${varelaRound.variable} ${roboto.variable} bg-light_primary text-light_secondary dark:bg-dark_primary dark:text-dark_secondary`}
        >
            <Providers>
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <div className="flex-1">{children}</div>
                    <Footer />
                </div>
            </Providers>
        </div>
    );
}

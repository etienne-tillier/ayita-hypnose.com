import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Ayita Hypnose";
const siteDescription =
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    "Cabinet d'hypnothérapie professionnelle. Découvrez les bienfaits de l'hypnose thérapeutique pour l'arrêt du tabac, la gestion du stress, la confiance en soi et le mieux-être général.";

export const metadata: Metadata = {
    title: {
        default: siteName,
        template: `%s | ${siteName}`,
    },
    description: siteDescription,
    icons: {
        icon: "/icon.svg",
    },
    openGraph: {
        type: "website",
        locale: "fr_FR",
        siteName: siteName,
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
            <body className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 pt-20">{children}</main>
                <Footer />
            </body>
        </html>
    );
}

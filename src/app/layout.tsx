'use client';
import { Footer, Header, ScrollToTop } from '../../components';
import { Providers } from './providers';
import './globals.css';
import { UseProvider } from '../../appState/';

// export const metadata = {
// 	title: `Home Page • ${process.env.NEXT_PUBLIC_TITLE_APP}`,
// };

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html suppressHydrationWarning lang="en">
			<head>
				<meta
					content="width=device-width, initial-scale=1"
					name="viewport"
				/>
				<meta
					name="description"
					content="Broker Compare • Trader & Investments"
				/>
				<link rel="icon" href="./images/favicon.ico" />
				<link
					href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
					rel="stylesheet"
				></link>
				<meta property="og:image" content="./images/favicon.ico" />
				<title>{`Home Page • ${process.env.NEXT_PUBLIC_TITLE_APP}`}</title>
				<script
					defer
					src="https://kit.fontawesome.com/cc3041f69f.js"
					crossOrigin="anonymous"
				></script>
			</head>
			<body className="dark:bg-black">
				<UseProvider>
					<Providers>
						<Header />
						{children}
						<Footer />
						<ScrollToTop />
					</Providers>
				</UseProvider>
			</body>
		</html>
	);
}

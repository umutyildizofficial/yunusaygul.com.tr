import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useEffect, useState } from "react";
import Head from "next/head";

const LightTheme = {
  backgroundprimary: "#ffffff",
  backgroundSecondary: "#DFDFDD",
  fontPrimary: "#000000",
  fontSecondary: "#5A5A58",
};

const DarkTheme = {
  backgroundPrimary: "#151515",
  backgroundSecondary: "#202022",
  fontPrimary: "#ffffff",
  fontSecondary: "#A5A5A7",
};

export const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  transition: background-color 500ms ease;
}

html{
  scroll-behavior: smooth;
}

html,body{
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
}

body{
    background-color: ${({ theme }) => theme.backgroundPrimary};
    position: relative;
  }
`;

function MyApp({ Component, pageProps }) {
  // const [theme, setTheme] = useState(
  //   JSON.parse(localStorage.getItem("theme")) || "dark"
  // );
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ||
        (window.matchMedia("(prefers-color-scheme:light)").matches
          ? "light"
          : "dark")
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <Head>
        <title>Yunus Aygul</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="/js/NotAtAllInteresting.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Primary Meta Tags */}
        <title>Yunus Aygul's Portfolio</title>
        <meta name="title" content="Yunus Aygul's Portfolio" />
        <meta
          name="description"
          content="I am Yunus, I live in Turkey/Bitlis. I am 18 years old, I am a Company Owner at Sunucu Duragi, I develop Sunucu Duragi as well as develop my personal site. I help people a lot about Web Software and Minecraft Plugin Pack."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yunusaygul.com.tr" />
        <meta property="og:title" content="Yunus Aygul's Portfolio" />
        <meta
          property="og:description"
          content="I am Yunus, I live in Turkey/Bitlis. I am 18 years old, I am a Company Owner at Sunucu Duragi, I develop Sunucu Duragi as well as develop my personal site. I help people a lot about Web Software and Minecraft Plugin Pack."
        />
        <meta property="og:image" content="/images/profile.gif" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle theme={themes[theme]} />
      <ThemeProvider theme={themes[theme]}>
        <Component theme={theme} setTheme={setTheme} {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;

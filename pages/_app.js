import "../styles/globals.css";
import '../public/nprogress.css'
// require("../styles/variables.less");
import { ThemeSwitcherProvider } from "react-css-theme-switcher";

// router progress bar
import NProgress from "nprogress"
import { useRouter } from 'next/router'


// redux import
import { wrapper } from "../store/store";
// import { Provider as ReduxStoreProvider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import { useEffect } from "react";

const themes = {
  dark: "./dark.css",
  light: "./light.css",
};

function DoPay({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`)
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  // const {store, props} = wrapper.useWrappedStore(rest);
  const getLayout = Component?.getLayout || ((page) => page);
  return (
    <CookiesProvider>
      <ThemeSwitcherProvider themeMap={themes} defaultTheme="light">
      {getLayout(<Component {...pageProps}/>)}
      </ThemeSwitcherProvider>
    </CookiesProvider>
  );
}

export default wrapper.withRedux(DoPay);

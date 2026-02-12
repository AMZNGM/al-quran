import ScrollProvider from '@/components/app-components/ScrollProvider'
import ScrollToTop from '@/components/app-components/ScrollToTop'
import Banner from '@/components/app-components/banner'
import Header from '@/components/Header'
// import Navbar from '@/components/nav-components/Navbar'
// import Footer from '@/components/footer-components/Footer'

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProvider>
        <ScrollToTop />
        <Banner />
        {/* <Header /> */}
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </ScrollProvider>
    </>
  )
}

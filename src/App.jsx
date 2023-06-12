
import "./App.css";
import  Sidebar  from './components/sidebar/Sidebar'
import  Home  from './components/home/Home'
import  About  from './components/about/About'
import  Resume  from './components/resume/Resume'
import  Portfolio  from './components/portfolio/Portfolio'
import  Services  from './components/services/Services'
import  Contact  from './components/contact/Contact'
import  Blog from './components/blog/Blog'
import  Pricing  from './components/pricing/Pricing'
import  Testimonials  from './components/testimonials/Testimonials'



function App() {

  return (
    <>
     <Sidebar />
     <main className='main'> 
     <Home/>
     <About/>
     <Services/>
     <Resume/>
     <Portfolio/>
     <Pricing/>
     <Testimonials/>
     <Blog/>
     <Contact/>

     </main>
    </>
  )
}

export default App

import Search from "./search";
import Premium from "./premium";
import Topics from "./topics";
import WhoFollow from "./who-follow";
import Footer from "./footer";
const Index = () => {
  return (
    <div className='w-[250px] md:w-[350px]  mr-2.5 sm:mr-1 min-h-screen '>
      <Search />
      <Premium />
      <Topics />
      <WhoFollow />
      <Footer />
    </div>
  )
}

export default Index

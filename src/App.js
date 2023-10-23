import './App.css';
import Footer from './component/Footer/Footer';
import Hero from './component/Hero/Hero'
import Join from './component/Join/Join';
import Programs from './component/Program/Programs';
import Reasons from './component/Reasons/Reasons';
import Testimonial from './component/Testimonial/testimonial';
import Plans from './component/plans/plans';
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons/>
      <Plans />
      <Testimonial/>
      <Join/>
      <Footer />
    </div>
  );
}

export default App;

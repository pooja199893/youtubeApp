import './App.css';
import { Route, Routes } from 'react-router-dom';
import Index from "./Component/youtube"
function App() {
  return (
    <>
     <div className="App">
      <Routes>
        <Route path='index' element={<Index />} />
      </Routes>
     </div>
    </>
  );
}

export default App;

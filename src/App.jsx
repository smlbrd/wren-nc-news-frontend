import './styles/App.css';
import { Route, Routes } from 'react-router';
import ViewHome from './components/ViewHome';
import ViewArticle from './components/ViewArticle';

function App() {
  return (
    <>
      <Routes>
        <Route path="/articles" element={<ViewHome />} />
        <Route path="/articles/:article_id" element={<ViewArticle />} />
      </Routes>
    </>
  );
}

export default App;

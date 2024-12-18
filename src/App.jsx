import './styles/App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ArticleList from './components/ArticleList';
import ArticlePage from './components/ArticlePage';
import TopicsList from './components/TopicsList';

function App() {
  return (
    <>
      <Header />
      <TopicsList />
      <Routes>
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
        <Route path="*" element={<Navigate to="/articles" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

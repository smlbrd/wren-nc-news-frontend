import './styles/App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ArticleList from './components/ArticleList';
import ArticlePage from './components/ArticlePage';
import TopicsBanner from './components/TopicsBanner';
import TopicArticles from './components/TopicArticles';

function App() {
  return (
    <>
      <Header />
      <TopicsBanner />
      <Routes>
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
        <Route path="/articles/topics/:topic" element={<TopicArticles />} />
        <Route path="*" element={<Navigate to="/articles" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://wren-nc-news.onrender.com/api',
});

const getAllArticles = () => {
  return api.get('/articles').then(({ data }) => {
    return data;
  });
};

const getArticleById = (articleId) => {
  return api.get(`/articles/${articleId}`).then(({ data }) => {
    return data;
  });
};

const getCommentsByArticleId = (articleId) => {
  return api.get(`/articles/${articleId}/comments`).then(({ data }) => {
    return data;
  });
};

const patchVotesByArticleId = (articleId, requestBody) => {
  return api.patch(`/articles/${articleId}`, requestBody);
};

export {
  getAllArticles,
  getArticleById,
  getCommentsByArticleId,
  patchVotesByArticleId,
};

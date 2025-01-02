import axios from 'axios';

const api = axios.create({
  baseURL: 'https://wren-nc-news.onrender.com/api',
});

const getAllTopics = () => {
  return api.get('/topics').then(({ data }) => {
    return data;
  });
};

const getAllArticles = (topic, sort_by, order, limit, p) => {
  return api
    .get('/articles', {
      params: { topic, sort_by, order, limit, p },
    })
    .then(({ data: { articles, articleCount } }) => {
      return { articles, articleCount };
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

const postCommentByArticleId = (articleId, newComment) => {
  return api
    .post(`/articles/${articleId}/comments`, newComment)
    .then(({ data: { comment } }) => {
      return comment;
    });
};

const deleteCommentById = (commentId) => {
  return api.delete(`/comments/${commentId}`);
};

const patchVotesByArticleId = (articleId, requestBody) => {
  return api.patch(`/articles/${articleId}`, requestBody);
};

const getUserByUsername = (username) => {
  return api.get(`/users/${username}`).then((response) => {
    console.log(response);
  });
};

export {
  getAllTopics,
  getAllArticles,
  getArticleById,
  getCommentsByArticleId,
  postCommentByArticleId,
  deleteCommentById,
  patchVotesByArticleId,
};

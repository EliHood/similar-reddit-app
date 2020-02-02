import * as types from "../actionTypes/postActionTypes";

export const createPostInit = (payload: object) => ({
    type: types.CREATE_POST_INIT,
    payload,
});

export const createPostSuccess = (payload: object) => ({
    type: types.CREATE_POST_SUCCESS,
    payload,
});

export const createPostFailure = (error: object) => ({
    type: types.CREATE_POST_FAILURE,
    error,
});

export const getPostsInit = () => ({
    type: types.GET_POSTS_INIT,
});

export const getPostsSuccess = (payload: object) => ({
    type: types.GET_POSTS_SUCCESS,
    payload,
});

export const getPostsFailure = (error: object) => ({
    type: types.GET_POSTS_FAILURE,
    error,
});

export const likePostInit = (payload: number) => ({
    type: types.LIKE_POST_INIT,
    payload,
});

export const likePostSuccess = (payload: object) => ({
    type: types.LIKE_POST_SUCCESS,
    payload,
});

export const likePostFailiure = (error: object) => ({
    type: types.LIKE_POST_FAILURE,
    error,
});

export const dislikePostInit = (payload: number) => ({
    type: types.DISLIKE_POST_INIT,
    payload,
});

export const dislikePostSuccess = (payload: object) => ({
    type: types.DISLIKE_POST_SUCCESS,
    payload,
});

export const dislikePostFailiure = (error: object) => ({
    type: types.DISLIKE_POST_FAILURE,
    error,
});

export const fetchPostInit = (payload: number) => ({
    type: types.FETCH_POST_INIT,
    payload,
});

export const fetchPostSuccess = (payload: object) => ({
    type: types.FETCH_POST_SUCCESS,
    payload,
});

export const fetchPostFailure = (error: object) => ({
    type: types.FETCH_POST_FAILURE,
    error,
});

export const deletePostInit = (payload: number, userId: number) => ({
    type: types.DELETE_POST_INIT,
    payload,
    userId,
});

export const deletePostSuccess = (payload: object, id: number) => ({
    type: types.DELETE_POST_SUCCESS,
    payload,
    id,
});

export const deletePostFailure = (error: object) => ({
    type: types.DELETE_POST_FAILURE,
    error,
});

export const postCommentInit = (payload: object) => ({
    type: types.POST_COMMENT_INIT,
    payload,
});

export const deleteCommentInit = (payload: number, postId: number, userId: number) => ({
    type: types.DELETE_COMMENT_INIT,
    payload,
    postId,
    userId,
});

export const deleteCommentSuccess = (payload: object, id: number, postId: number) => ({
    type: types.DELETE_COMMENT_SUCCESS,
    payload,
    id,
    postId,
});

export const deleteCommentFailure = (error: object) => ({
    type: types.DELETE_COMMENT_FAILURE,
    error,
});

export const postCommentSuccess = (payload: object, id: number) => ({
    type: types.POST_COMMENT_SUCCESS,
    payload,
    id,
});

export const postCommentFailure = (error: object) => ({
    type: types.POST_COMMENT_FAILURE,
    error,
});

export const addTitle = (data: string) => ({
    type: types.ADD_TITLE,
    data,
});

export const addContent = (data: string) => ({
    type: types.ADD_CONTENT,
    data,
});
export const notificationInit = () => ({
    type: types.INIT_NOTIFICATION,
});

export const notificationSuccess = (payload: object) => ({
    type: types.NOTIFICATION_SUCCESS,
    payload,
});

export const notificationFailure = (err: object) => ({
    type: types.NOTIFICATION_FAILURE,
    err,
});

export const initCommentUpdates = () => ({
    type: types.INIT_COMMENT_UPDATES,
});

export const commentUpdatesSuccess = (payload: object) => ({
    type: types.COMMENT_UPDATES_SUCCESS,
    payload,
});

export const commentUpdatesFailure = (err: object) => ({
    type: types.COMMENT_UPDATES_FAILURE,
    err,
});

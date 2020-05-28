import "@testing-library/jest-dom";
import React, { Ref } from "react";
import CommentList from "./CommentList";
import { render, getByText, queryByText, getAllByTestId } from "@testing-library/react";

const props = {
    user: {},
    postId: null,
    userId: null,
    currentUser: {},
    ref: {
        current: undefined,
    },
    comments: [
        {
            author: { username: "barnowl", gravatar: "https://api.adorable.io/avatars/400/bf1eed82fbe37add91cb4192e4d14de6.png", bio: null },
            comment_body: "fsfsfsfsfs",
            createdAt: "2020-05-27T14:32:01.682Z",
            gifUrl: "",
            id: 520,
            postId: 28,
            updatedAt: "2020-05-27T14:32:01.682Z",
            userId: 9,
        },
        {
            author: { username: "barnowl", gravatar: "https://api.adorable.io/avatars/400/bf1eed82fbe37add91cb4192e4d14de6.png", bio: null },
            comment_body: "fsfsfsfsfs",
            createdAt: "2020-05-27T14:32:01.682Z",
            gifUrl: "",
            id: 519,
            postId: 27,
            updatedAt: "2020-05-27T14:32:01.682Z",
            userId: 10,
        },
    ],
    deleteComment: jest.fn(),
};
describe("Should render <CommentList/>", () => {
    it("should render <CommentList/>", () => {
        const commentList = render(<CommentList {...props} />);
        expect(commentList).toBeTruthy();
    });

    it("should render first comment", () => {
        const { getByTestId } = render(<CommentList {...props} />);
        const commentList = getByTestId("comment-list-div");
        expect(commentList.firstChild).toBeTruthy();
    });

    it("should render second child", () => {
        const { getByTestId } = render(<CommentList {...props} />);
        const commentList = getByTestId("comment-list-div");
        expect(commentList.lastChild).toBeTruthy();
    });

    it("should check comments", () => {
        const { getByTestId } = render(<CommentList {...props} />);
        const commentList = getByTestId("comment-list-div");
        expect(commentList).toBeInTheDocument();
    });
});

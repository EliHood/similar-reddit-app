import React, { useEffect, useRef, Fragment } from "react";
import CreatePost from "../forms/createPost/createPost";
import GridHoc from "../hoc/grid";
import OurTabs from "../tabs/OurTabs";
export interface dashboardProps {
    getPostsInit: () => void;
    getPopPostsInit: () => void;
    deletePostInit: (id: number) => void;
    postCommentInit: (event: object) => void;
    titleError?: boolean;
    bodyError?: boolean;
    posts: any[];
    error: any[];
    title: string;
    postContent: string;
    addTitle: (data: string) => void;
    addContent: (data: string) => void;
    popPosts: any[];
    createPostInit: (event: object) => void;
    likePost: (event: number) => void;
    dislikePost: (event: number) => void;
}

function Dashboard(props: dashboardProps) {
    // const [title, setTitle] = useState<string>("");
    // const [content, setContent] = useState<string>("");
    // const [value, setValue] = useState<number>(0);
    const didMountRef = useRef<Object>();
    useEffect(() => {
        if (!didMountRef.current) {
            props.getPostsInit();
        } else {
            console.log("this is component didupdate");
        }
    }, []); // array prevents an infinite loop

    const handleTitleChange = (e: any) => {
        e.preventDefault();
        props.addTitle(e.target.value);
    };

    const handleContentChange = (e: any) => {
        e.preventDefault();
        props.addContent(e.target.value);
    };
    const onSubmit = (e: any) => {
        e.preventDefault();
        const { title, postContent } = props;
        const postData = { title, postContent };
        console.log(postData);
        props.createPostInit(postData);
    };
    const isEnabled = props.titleError === true && props.bodyError === true ? false : true;

    return (
        <Fragment>
            <CreatePost
                title={props.title}
                postContent={props.postContent}
                handleTitleChange={handleTitleChange}
                handleContentChange={handleContentChange}
                onSubmit={onSubmit}
                disButton={isEnabled}
                titleError={props.titleError}
                bodyError={props.bodyError}
            />
            <br />
            {/* pass props redux props to tabs */}
            <OurTabs {...props} />
        </Fragment>
    );
}

export default GridHoc(Dashboard);

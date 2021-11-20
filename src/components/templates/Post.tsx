import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { PostsApi, Post } from '@optimisticninja/posts-api-js-client';
import { Typography } from '@mui/material';
import { useDocumentTitle } from '../../hooks';
import { Markdown } from '../organisms';

const PostComponent = function PostComponent(): React.ReactElement {
  useDocumentTitle('About');
  const params = useParams();
  const [post, setPost] = useState({ markdown: '', title: '' });

  useEffect(() => {
    const apiInstance = new PostsApi();
    apiInstance.getPost(params.id).then((data: Post) => {
      setPost(data);
    }, (error: unknown) => {
      console.error(error);
    });
  }, [setPost, params.id]);

  return (
    <>
      <Typography variant="h3">{post.title}</Typography>
      <Markdown>{post.markdown}</Markdown>
    </>
  );
};

export default PostComponent;

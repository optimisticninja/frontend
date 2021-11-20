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
    const opts = {
      page: 0, // Number | page offset
      size: 6, // Number | page size
    };
    apiInstance.getPost(params.id).then((data: Post) => {
      setPost(data);
    }, (error: any) => {
      console.error(error);
    });
  }, [setPost]);

  return (
    <>
      <Typography variant="h3">{post.title}</Typography>
      <Markdown>{post.markdown}</Markdown>
    </>
  );
};

export default PostComponent;

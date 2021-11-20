/* eslint-disable max-len */
import React from 'react';

import
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
{ Post } from '@optimisticninja/posts-api-js-client';
import { Grid } from '@mui/material';
import { useGlobalState } from '../../hooks/useGlobalState';
import MediaCard from '../molecules/MediaCard';

const Posts = function Posts(): React.ReactElement {
  const { state } = useGlobalState();
  const cards = state?.posts?.map((post: Post) => (
    <Grid item xs={8} md={4} justifyContent="center">
      <MediaCard id={post.id} title={post.title} summary={post.summary} imageUrl={post.imageUrl} />
    </Grid>
  ));
  return (
    <Grid container spacing={2} justifyItems="center" justifyContent="center">
      {cards}
    </Grid>
  );
};

export default Posts;

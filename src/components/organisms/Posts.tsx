/* eslint-disable react/jsx-no-bind */
/* eslint-disable max-len */
import React, { useEffect } from 'react';

import
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
{ PostsApi, ListPostsResponse, Post } from '@optimisticninja/posts-api-js-client';
import { Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../../hooks/useGlobalState';
import MediaCard from '../molecules/MediaCard';
import { GlobalStateInterface } from '../../state/GlobalStateProvider';
import { StyledLink } from '../atoms';

const Posts = function Posts(): React.ReactElement {
  const { state, setState } = useGlobalState();

  const handleNextClick = function onClick():void {
    const apiInstance = new PostsApi();
    const opts = {
      page: state.page ? state.page + 1 : 1, // Number | page offset
      size: state.size, // Number | page size
    };
    apiInstance.getPosts(opts).then((data: ListPostsResponse) => {
      setState((prev: GlobalStateInterface) => ({
        ...prev, posts: data.postSummaries, nextPage: data.nextPage, page: opts.page, size: opts.size, hasPrevious: true,
      }));
    }, (error: unknown) => {
      console.error(error);
    });
  };

  const handlePreviousClick = function onClick():void {
    const apiInstance = new PostsApi();
    const opts = {
      page: state.page ? state.page - 1 : 0, // Number | page offset
      size: state.size, // Number | page size
    };
    apiInstance.getPosts(opts).then((data: ListPostsResponse) => {
      setState((prev: GlobalStateInterface) => ({
        ...prev, posts: data.postSummaries, nextPage: data.nextPage, page: opts.page, size: opts.size, hasPrevious: data.nextPage !== 1,
      }));
    }, (error: unknown) => {
      console.error(error);
    });
  };

  const cards = state?.posts?.map((post: Post) => (
    <Grid item xs={8} md={4} justifyContent="center">
      <MediaCard id={post.id} title={post.title} summary={post.summary} imageUrl={post.imageUrl} />
    </Grid>
  ));

  useEffect(() => {
    console.log('state updated');
  }, [state, cards]);

  return (
    <>
      <Grid container spacing={2} justifyItems="center" justifyContent="center">
        {cards}
      </Grid>
      <br />
      <Grid container spacing={2} justifyItems="center" justifyContent="center">
        {state.hasPrevious ? <Button onClick={handlePreviousClick} variant="text" sx={{ ml: 2 }}>Previous</Button> : <div />}
        &nbsp;&nbsp;
        {state.nextPage ? <Button onClick={handleNextClick} variant="text" sx={{ ml: 2 }}>Next</Button> : <div />}
      </Grid>
    </>
  );
};

export default Posts;

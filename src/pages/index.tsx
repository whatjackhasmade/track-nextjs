import * as React from 'react';
import { useQuery } from 'react-query';

// Particles
import { callGetPosts } from 'track';
import { callGetWishlist } from 'track';

// Organisms
import { Collection } from 'track';

// Pages
import { Page } from 'track';

const NodePage = context => {
  return (
    <Page {...context}>
      <h1 className="hidden">Homepage</h1>
      <AllPosts />
      <AllWishlist />
    </Page>
  );
};

const AllPosts = () => {
  const { data: res, error, isLoading: loading } = useQuery(`callGetPosts`, callGetPosts);
  const items = res?.data;

  return <Collection error={error} items={items} loading={loading} title="Posts found on Reddit" />;
};

const AllWishlist = () => {
  const { data: res, error, isLoading: loading } = useQuery(`callGetWishlist`, callGetWishlist);
  const items = res?.data;

  return <Collection error={error} items={items} loading={loading} title="Wishlist, from Discogs" />;
};

export default NodePage;

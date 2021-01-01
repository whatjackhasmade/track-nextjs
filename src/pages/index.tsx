import * as React from 'react';
import { useQuery } from 'react-query';

// Particles
import { callGetPosts } from 'track';
import { callGetWantlist } from 'track';

// Molecules
import { Error } from 'track';

// Organisms
import { Collection } from 'track';

// Pages
import { Page } from 'track';

const NodePage = context => {
  return (
    <Page {...context}>
      <h1 className="hidden">Homepage</h1>
      <AllPosts />
      <AllWantlist />
    </Page>
  );
};

const AllPosts = () => {
  const { data: res, error, isLoading: loading } = useQuery(`callGetPosts`, callGetPosts);
  const items = res?.data;

  return <Collection error={error} items={items} loading={loading} title="Posts found on Reddit" />;
};

const AllWantlist = () => {
  const { data: res, error, isLoading: loading } = useQuery(`callGetWantlist`, callGetWantlist);
  const items = res?.data;

  return <Collection error={error} items={items} loading={loading} title="Wantlist, from Discogs" />;
};

export default NodePage;

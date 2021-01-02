/* eslint-disable react/react-in-jsx-scope */
import { useFormik } from 'formik';
import { useMutation } from 'react-query';

import { fetchAPI } from 'track';
import { callPutSingleWishlist } from 'track';

import { Badge } from 'track';
import { Link } from 'track';

import { Error } from 'track';

import { Page } from 'track';

export async function getServerSideProps(context) {
  const id: string = context?.query?.id;
  const data = await fetchAPI({ method: `GET`, parameters: { id }, route: `wishlist` });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...data,
    },
  };
}

declare type Props = {
  data: {
    artists: string;
    bandcamp: string;
    discogsID: string;
    labels: string;
    title: string;
  };
};

export const WishlistSingle: React.FC<Props> = (props: Props) => {
  const { data } = props;
  const { artists, bandcamp, discogsID, labels, title } = data;

  return (
    <Page>
      <Link href="/wishlist">Wishlist</Link>
      <h1>{title}</h1>
      <h2>{artists}</h2>
      <div className="badge-group">
        {artists && <Badge>{artists}</Badge>}
        {bandcamp && <Badge>{bandcamp}</Badge>}
        {discogsID && <Badge>{discogsID}</Badge>}
        {labels && <Badge>{labels}</Badge>}
      </div>
      <DataForm data={data} />
    </Page>
  );
};

const DataForm: React.FC<Props> = (props: Props) => {
  const { data } = props;
  const { artists, bandcamp, discogsID, labels } = data;

  const { error, isSuccess: success, mutateAsync } = useMutation(callPutSingleWishlist);

  const formik = useFormik({
    initialValues: {
      artists,
      bandcamp,
      labels,
    },
    onSubmit: async values => await mutateAsync({ id: discogsID, ...values }),
    validate: values => {
      const errors = {};
      // const { artists, bandcamp, labels } = values;
      return errors;
    },
    validateOnBlur: false,
    validateOnChange: false,
  });

  const { handleChange, handleSubmit } = formik;
  const { isSubmitting } = formik;

  const { values } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <fieldset aria-busy={isSubmitting} disabled={isSubmitting}>
        {success && <p>Update was successfull</p>}
        {error && <Error error={error} />}
        <label htmlFor="artists">Artists</label>
        <input id="artists" name="artists" type="text" onChange={handleChange} value={values.artists} />
        <label htmlFor="bandcamp">Bandcamp</label>
        <input id="bandcamp" name="bandcamp" type="text" onChange={handleChange} value={values.bandcamp} />
        <label htmlFor="labels">Labels</label>
        <input id="labels" name="labels" type="text" onChange={handleChange} value={values.labels} />
        <button type="submit">Update</button>
      </fieldset>
    </form>
  );
};

export default WishlistSingle;

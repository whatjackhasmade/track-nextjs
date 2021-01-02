/* eslint-disable react/react-in-jsx-scope */
import { useFormik } from 'formik';
import { useMutation } from 'react-query';
import { useQuery } from 'react-query';
import { useQueryClient } from 'react-query';
import { Container, Row, Col } from 'react-grid-system';

import { callGetSingleWishlist } from 'track';
import { callPutSingleWishlist } from 'track';

import { Badge } from 'track';
import { Link } from 'track';

import { Error } from 'track';

import { Page } from 'track';

export async function getServerSideProps(context) {
  const id: string = context?.query?.id;

  return {
    props: {
      id,
    },
  };
}

declare type Props = {
  artists: string;
  bandcamp: string;
  discogsID: string;
  labels: string;
  title: string;
};

export const Wrapper = (props: { id: string }) => {
  const { id } = props;
  const { data: res } = useQuery(`callGetSingleWishlist`, () => callGetSingleWishlist({ id }));
  const data = res?.data;

  if (data) return <WishlistSingle {...data} />;
  return null;
};

export const WishlistSingle: React.FC<Props> = (props: Props) => {
  const { artists, bandcamp, discogsID, labels, title } = props;

  return (
    <Page>
      <Container>
        <Row>
          <Col sm={6}>
            {` `}
            <Link href="/wishlist">Wishlist</Link>
            <h1>{title}</h1>
            <h2>{artists}</h2>
            <div className="badge-group">
              {artists && <Badge>{artists}</Badge>}
              {bandcamp && <Badge>{bandcamp}</Badge>}
              {discogsID && <Badge>{discogsID}</Badge>}
              {labels && <Badge>{labels}</Badge>}
            </div>
          </Col>
          <Col sm={6}>
            <DataForm {...props} />
          </Col>
        </Row>
      </Container>
    </Page>
  );
};

const DataForm: React.FC<Props> = (props: Props) => {
  const { artists, bandcamp, discogsID, labels, title } = props;
  const queryClient = useQueryClient();

  const { error, isSuccess: success, mutateAsync } = useMutation(callPutSingleWishlist, {
    // Notice the second argument is the variables object that the `mutate` function receives
    onSuccess: (data, variables) => {
      queryClient.setQueryData([`callGetSingleWishlist`, { id: discogsID }], data);
    },
  });

  const formik = useFormik({
    initialValues: {
      artists,
      bandcamp,
      labels,
      title,
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
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" onChange={handleChange} value={values.title} />
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

export default Wrapper;

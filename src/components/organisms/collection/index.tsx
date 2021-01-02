import { Container, Row, Col } from 'react-grid-system';

import CollectionComponent from './collection.styles';

import { Badge } from 'track';
import { Link } from 'track';

import { Card } from 'track';
import { Error } from 'track';

declare type CollectionProps = {
  error?: any;
  items: any[];
  loading: boolean;
  title?: string;
};

export const Collection: React.FC<CollectionProps> = (props: CollectionProps) => {
  const { error, items, loading, title } = props;

  const hasItems: boolean = items?.length > 0;
  if (!hasItems) return null;

  return (
    <CollectionComponent>
      <Container>
        <Row>
          <Col>
            <div className="collection__contents">
              {title && <h2 className="collection__title">{title}</h2>}
              {loading && <p>Loading...</p>}
              {error && <Error error={error} />}
              <div className="collection__items">
                {hasItems &&
                  items.map(item => {
                    const { id, artists, bandcamp, discogsID, labels, title, url } = item;

                    const key = id;

                    let heading = title;
                    if (labels) heading += ` - ${labels}`;

                    const href = `/wishlist/` + discogsID;

                    return (
                      <Card className="collection__item" key={key}>
                        {url && (
                          <a href={url} rel="noreferrer noopener" target="_blank">
                            <h3>{heading}</h3>
                          </a>
                        )}
                        {!url && <h3>{heading}</h3>}
                        <div className="badge-group">
                          {artists && <Badge>{artists}</Badge>}
                          {bandcamp && <Badge>{bandcamp}</Badge>}
                          {discogsID && <Badge>{discogsID}</Badge>}
                        </div>
                        <Link className="button" href={href}>
                          View Item
                        </Link>
                      </Card>
                    );
                  })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </CollectionComponent>
  );
};

export default Collection;

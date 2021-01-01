import dayjs from 'dayjs';

import CollectionComponent from './collection.styles';

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
      <div className="collection__contents">
        <div className="grid">
          {title && <h2 className="collection__title">{title}</h2>}
          {loading && <p>Loading...</p>}
          {error && <Error error={error} />}
          <ul className="collection__items">
            {hasItems &&
              items.map(item => {
                const { id, labels, link, title, updatedAt } = item;

                const key = id;

                let heading = title;
                if (labels) heading += ` - ${labels}`;

                const date = dayjs(updatedAt).format(`MMM D, YYYY h:mm A`); // display

                return (
                  <li className="collection__item" key={key}>
                    {link && (
                      <a href={link} rel="noreferrer noopener" target="_blank">
                        {heading}
                      </a>
                    )}
                    {!link && <span>{heading}</span>}
                    {date && <time>Updated at {date}</time>}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </CollectionComponent>
  );
};

export default Collection;

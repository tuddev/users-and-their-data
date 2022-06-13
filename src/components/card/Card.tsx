import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '../icons';

type CardProps = {
  title?: string;
  link?: string;
};

export const Card = ({ title, link, children }: React.PropsWithChildren<CardProps>): JSX.Element => {
  const TitleComponent = link ? Link : 'div';

  return (
    <div className="p-6 w-full max-w-xl mb-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <TitleComponent to={link} className="capitalize">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </TitleComponent>
      {children}
      {
        link && <Link to={link} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <ArrowRight className="ml-2 -mr-1 w-4 h-4"/>
          </Link>
      }
  </div>
  );
};

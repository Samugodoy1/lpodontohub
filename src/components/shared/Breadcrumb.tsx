import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  url?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const schemaList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: 'https://www.odontohub.app.br/',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: item.url ? `https://www.odontohub.app.br${item.url}` : undefined,
      })),
    ],
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaList)}</script>
      </Helmet>

      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] text-apple-gray mb-8">
        <Link to="/" className="hover:text-apple-ink hover:underline underline-offset-2">
          Início
        </Link>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={`${item.name}-${index}`}>
              <span className="text-apple-line">/</span>
              {item.url && !isLast ? (
                <Link to={item.url} className="hover:text-apple-ink hover:underline underline-offset-2 truncate max-w-[220px]">
                  {item.name}
                </Link>
              ) : (
                <span className="text-apple-ink truncate max-w-[280px]">{item.name}</span>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  // Generate JSON-LD Schema.org for BreadcrumbList
  const schemaList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://odontohub.app.br/"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.name,
        "item": item.url ? `https://odontohub.app.br${item.url}` : undefined
      }))
    ]
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaList)}
        </script>
      </Helmet>
      
      <nav 
        aria-label="Breadcrumb" 
        className="flex items-center space-x-2 text-xs font-semibold text-brand-text-muted mb-8 bg-slate-50 border border-brand-border/60 px-3 py-1.5 w-fit rounded-xl max-w-full overflow-hidden"
        id="breadcrumb-navigation"
        vocab="https://schema.org/"
        typeof="BreadcrumbList"
      >
        <span property="itemListElement" typeof="ListItem" className="flex items-center shrink-0">
          <Link 
            to="/" 
            className="flex items-center gap-1.2 hover:text-brand-green transition-colors text-brand-text-muted"
            property="item" 
            typeof="WebPage"
          >
            <Home size={12} className="inline mr-1 text-brand-green" />
            <span property="name">Início</span>
          </Link>
          <meta property="position" content="1" />
        </span>

        {items.map((item, index) => {
          const position = index + 2;
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={index}>
              <ChevronRight size={10} className="text-brand-text-muted/40 shrink-0" />
              <span property="itemListElement" typeof="ListItem" className="flex items-center min-w-0">
                {item.url && !isLast ? (
                  <Link 
                    to={item.url} 
                    className="hover:text-brand-green transition-colors text-brand-text-muted truncate block"
                    property="item" 
                    typeof="WebPage"
                  >
                    <span property="name">{item.name}</span>
                  </Link>
                ) : (
                  <span className="text-brand-text font-bold truncate block" property="name">
                    {item.name}
                  </span>
                )}
                {item.url && <meta property="item" content={`https://odontohub.app.br${item.url}`} />}
                <meta property="position" content={String(position)} />
              </span>
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
}

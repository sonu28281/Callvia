import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import seoConfig from '../config/seo_config.json';
import siteConfig from '../config/site_config.json';

const SEO = () => {
  const location = useLocation();
  const pathname = location.pathname;
  
  const routeConfig = seoConfig.routes[pathname] || {};
  const defaults = seoConfig.defaults;
  
  const title = routeConfig.title 
    ? `${routeConfig.title}${defaults.titleSuffix}` 
    : `${siteConfig.company.name}${defaults.titleSuffix}`;
  
  const description = routeConfig.description || defaults.description;
  const canonical = `${typeof window !== 'undefined' ? window.location.origin : ''}${routeConfig.canonical || pathname}`;
  const ogImage = `${typeof window !== 'undefined' ? window.location.origin : ''}${routeConfig.ogImage || defaults.ogImage}`;
  const robots = routeConfig.robots || defaults.robots;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={robots} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteConfig.company.name} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={defaults.twitterCard} />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;

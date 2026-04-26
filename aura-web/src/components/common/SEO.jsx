import { Helmet } from 'react-helmet-async';

/**
 * SEO component to handle dynamic head management.
 * @param {Object} props
 * @param {string} props.title - The title of the page.
 * @param {string} props.description - The description of the page.
 * @param {string} props.canonical - The canonical URL of the page.
 * @param {string} props.type - The type of content (e.g., website, article).
 * @param {string} props.image - The preview image URL.
 */
const SEO = ({ 
  title, 
  description, 
  canonical, 
  type = 'website', 
  image = 'https://auraui.org/og-image.png' 
}) => {
  const siteTitle = 'Aura | Unleash the future of UI';
  const fullTitle = title ? `${title} | Aura` : siteTitle;
  const siteDescription = "Aura - Unleash the future of UI with our modern, high-performance UI components and layout systems.";
  const metaDescription = description || siteDescription;
  const siteUrl = 'https://auraui.org';
  const url = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;

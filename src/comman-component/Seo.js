import Head from "next/head";
import { useRouter } from "next/router";

const SEO = ({
  metaTitle,
  metaDescription = "",
  keywords = "",
  // url = "",
  // canonical = "",
  ogTitle,
  ogDescription,
  // ogImage,
  twitterTitle,
  twitterDescription,
  twitterImage,
  robots = "index, follow",
  favicon = "/favicon.ico",
}) => {
  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const url = `${baseUrl}${router.asPath}`;
  const canonical = url;

  if (!metaTitle) {
    console.warn('SEO component: "metaTitle" is required but missing.');
    return null;
  }

  const finalOgImage = "/zantraillogo.png";
  return (
    <Head>
      {/* General Meta */}
      <title>{metaTitle}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical || url} />

      {/* Favicon */}
      <link rel="icon" href={favicon} type="image/x-icon" />

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={ogTitle || metaTitle} />
      <meta
        property="og:description"
        content={ogDescription || metaDescription}
      />
      <meta property="og:image" content={finalOgImage} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={twitterTitle || metaTitle} />
      <meta
        name="twitter:description"
        content={twitterDescription || metaDescription}
      />
      {twitterImage && <meta name="twitter:image" content={finalOgImage} />}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            logo: "/favicon.ico",
          }),
        }}
      />
    </Head>
  );
};

export default SEO;

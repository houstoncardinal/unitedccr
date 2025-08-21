import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "United CCR - Disaster Restoration Services in Texas",
    "description": "Professional disaster restoration services in Texas. Emergency response for fire damage, water damage, storm damage, and mold remediation. Licensed, insured, and serving Houston & statewide.",
    "url": "https://unitedccr.com",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "United CCR",
      "alternateName": "United Construct Clean Restore",
      "description": "Professional disaster restoration services in Texas. Emergency response for fire damage, water damage, storm damage, and mold remediation.",
      "url": "https://unitedccr.com",
      "logo": "https://unitedccr.com/emblem.jpg",
      "image": "https://unitedccr.com/thumbnail.png",
      "telephone": "+1-832-683-7433",
      "email": "info@unitedccr.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cypress",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "29.9691",
        "longitude": "-95.6972"
      },
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "$$",
      "paymentAccepted": "Cash, Credit Card, Insurance",
      "currenciesAccepted": "USD",
      "areaServed": {
        "@type": "State",
        "name": "Texas"
      },
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "29.9691",
          "longitude": "-95.6972"
        },
        "geoRadius": "50000"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Disaster Restoration Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Fire Damage Restoration",
              "description": "Complete fire damage cleanup, smoke removal, and structural restoration services",
              "url": "https://unitedccr.com/disaster-restoration/fire-damage"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Water Damage Restoration",
              "description": "Rapid water extraction, drying, and restoration to prevent mold growth",
              "url": "https://unitedccr.com/disaster-restoration/water-damage"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Storm Damage Restoration",
              "description": "Emergency storm damage repair including roof, siding, and structural restoration",
              "url": "https://unitedccr.com/disaster-restoration/storm-damage"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mold Remediation",
              "description": "Professional mold inspection, removal, and prevention services",
              "url": "https://unitedccr.com/disaster-restoration/mold-remediation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Construction Services",
              "description": "Disaster reconstruction and emergency repairs",
              "url": "https://unitedccr.com/disaster-restoration/construction-services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Roofing Services",
              "description": "Emergency roofing repairs and disaster-related roof restoration",
              "url": "https://unitedccr.com/disaster-restoration/roofing-services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cleaning Services",
              "description": "Post-disaster cleaning and sanitization services",
              "url": "https://unitedccr.com/disaster-restoration/cleaning-services"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Sarah Johnson"
          },
          "reviewBody": "United CCR responded quickly to our fire damage emergency. Professional service and excellent results."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Michael Chen"
          },
          "reviewBody": "Outstanding water damage restoration service. They saved our property from extensive damage."
        }
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="United CCR - Disaster Restoration Services in Texas | Fire, Water, Storm & Mold Damage"
        description="Professional disaster restoration services in Texas. Emergency response for fire damage, water damage, storm damage, and mold remediation. Licensed, insured, and serving Houston & statewide."
        keywords="disaster restoration, fire damage restoration, water damage restoration, storm damage restoration, mold remediation, Texas, Houston, emergency response, property restoration, United CCR, emergency restoration services"
        canonical="https://unitedccr.com"
        schema={schema}
      />
      <Header />
      
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Index;

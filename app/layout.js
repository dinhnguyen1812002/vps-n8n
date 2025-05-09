import "@/styles/index.scss";

import { Plus_Jakarta_Sans } from "next/font/google";
const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

import Wrapper from "./wrapper";
import Script from "next/script";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <script
          id="ggTagManager"
        
          dangerouslySetInnerHTML={{
            __html: `
           (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MMT983V3');
            `,
          }}
        />

<script async src="https://www.googletagmanager.com/gtag/js?id=G-BHY0XZSXPX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BHY0XZSXPX');
            `,
          }}
        />

        <Script
          type="application/ld+json"
          id="productld"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              "name": "Thuê Hosting Giá Rẻ [1K/Ngày] Chất Lượng – Tốc Độ Cao",
              "image": ["https://interdata.vn/blog/wp-content/uploads/2024/12/Dich-vu-thue-Hosting.jpeg",
                "https://interdata.vn/blog/wp-content/uploads/2024/12/Bang-gia-Hosting.jpeg"],
              "description": "Đăng ký, mua, thuê Hosting giá rẻ [Chỉ 1K/Ngày], chất lượng cao hoạt động ổn định – 1Gbps Network Port – Miễn phí SSL – Bảo mật Imunify360.",
              "category": "Hosting, Thuê Hosting, Thuê Hosting giá rẻ, Hosting giá rẻ, Thuê Hosting chất lượng cao, Thuê Hosting uy tín, Thuê Hosting tốc độ cao, Hosting Wordpress",
              "url": "https://interdata.vn/thue-hosting/",
              "brand": {
                "@type": "Brand",
                "name": "InterData"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "bestRating": "5",
                "worstRating": "1",
                "ratingCount": "268"
              }
            })
          }}
        />
        {/* <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "InterData",
              "alternateName": "InterData Joint Stock Company",
              "url": "https://interdata.vn/",
              "logo": "https://interdata.vn/assets/interdata-logo.png",

              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "1900.63.68.22",
                "contactType": "technical support",
                "areaServed": "VN",
                "availableLanguage": "Vietnamese"
              },
              "sameAs": [
                "https://www.youtube.com/@interdata-vn",
                "https://www.facebook.com/interdata.com.vn",
                "https://www.tiktok.com/@interdata_vn",
                "https://www.flickr.com/people/interdata-vn/",
                "https://www.tumblr.com/interdata-vn",
                "https://www.behance.net/interdata-vn",
                "https://interdatavn.weebly.com/",
                "https://interdatavn.wordpress.com/",
                "https://sites.google.com/view/interdata-vn/",
                "https://interdatavn.mystrikingly.com/",
                "https://interdatavn.blogspot.com/",
                "https://csu968.webmepage.com/interdatavn",
                "https://trello.com/u/interdatavn/activity",
                "https://www.plurk.com/interdatavn/public",
                "https://www.librarything.com/profile/Interdata-vn",
                "https://linkhay.com/u/interdatavn",
                "https://list.ly/interdatavn/activity",
                "https://tapas.io/interdatavn",
                "https://www.trepup.com/@interdata-vn",
                "https://www.pinterest.com/interdatavn/",
                "https://500px.com/p/interdatavn?view=photos",
                "https://www.instagram.com/interdatavn/",
                "https://www.blogger.com/profile/03177017902435174619",
                "https://issuu.com/interdatavn",
                "https://www.goodreads.com/user/show/170516874-interdata-vn",
                "https://myspace.com/interdatavn",
                "https://stackoverflow.com/users/22700836/interdata-vn?",
                "https://www.quora.com/profile/Interdata-Vn",
                "https://learn.microsoft.com/vi-vn/users/interdata-vn/",
                "https://bit.ly/m/interdatavn",
                "https://linktr.ee/interdatavn",
                "https://gitlab.com/interdatavn",
                "https://knowyourmeme.com/users/interdata-vn",
                "https://www.mixcloud.com/interdatavn/",
                "https://www.reverbnation.com/interdatavn",
                "https://hub.docker.com/u/interdatavn",
                "https://profile.ameba.jp/ameba/interdata-vn/",
                "https://fliphtml5.com/homepage/fkqis",
                "https://sketchfab.com/interdatavn",
                "https://letterboxd.com/interdatavn/",
                "https://hubpages.com/@interdatavn",
                "https://visual.ly/users/interdatavn/portfolio",
                "https://wakelet.com/@interdatavn",
                "https://www.podomatic.com/podcasts/marketing-interdatavnpodcast",
                "https://qiita.com/interdatavn",
                "https://www.webofscience.com/wos/author/record/JGW-7668-2023",
                "https://devpost.com/interdata-vn",
                "https://www.magcloud.com/user/interdatavn",
                "https://pubhtml5.com/homepage/zsgys/",
                "https://pbase.com/interdatavn/profile",
                "https://www.beatstars.com/interdatavn",
                "https://myanimelist.net/profile/interdatavn",
                "https://www.bonanza.com/users/57973957/profile",
                "https://www.question2answer.org/qa/user/interdatavn",
                "https://www.rawpixel.com/interdatavn/community-boards",
                "https://pxhere.com/vi/photographer-me/4097256",
                "https://www.intensedebate.com/people/interdatavn",
                "https://www.ultimate-guitar.com/u/marketinginte2",
                "https://8tracks.com/interdatavn",
                "https://www.hulkshare.com/interdatavn",
                "https://os.mbed.com/users/interdatavn/",
                "https://www.forexfactory.com/interdatavn",
                "https://triberr.com/interdatavn",
                "https://my.desktopnexus.com/interdatavn/",
                "https://www.free-ebooks.net/profile/1507727/interdata-vn",
                "https://www.weddingbee.com/members/interdatavn/",
                "https://www.divephotoguide.com/user/interdatavn",
                "https://www.sqlservercentral.com/forums/user/interdatavn",
                "https://confengine.com/user/interdata-vn",
                "https://blip.fm/interdatavn",
                "https://guides.co/a/interdata-vn/",
                "https://able2know.org/user/interdatavn/",
                "https://www.cakeresume.com/me/interdata-vn",
                "https://recordsetter.com/user/interdatavn",
                "https://www.mapleprimes.com/users/interdatavn",
                "https://www.mxsponsor.com/riders/interdata-vn",
                "https://www.metooo.io/u/interdatavn",
                "https://beermapping.com/account/interdatavn",
                "https://qooh.me/interdatavn",
                "https://telegra.ph/interdatavn-10-12",
                "https://vimeo.com/interdatavn",
                "https://worldcosplay.net/member/1467423",
                "https://www.last.fm/user/interdatavn",
                "https://fr.quora.com/profile/Interdata-Vn",
                "https://www.slideshare.net/interdatavn",
                "https://www.twitch.tv/interdatavn",
                "http://gendou.com/user/interdatavn",
                "https://digg.com/@interdata-marketing",
                "https://profile.hatena.ne.jp/interdatavn/profile",
                "https://readthedocs.org/profiles/interdatavn/",
                "https://www.gaiaonline.com/profiles/interdatavn/46444053/",
                "https://www.houzz.com/user/interdatavn",
                "https://www.kongregate.com/accounts/interdatavn",
                "https://www.mountainproject.com/user/201697937/interdata-vn",
                "https://www.ranker.com/writer/interdatavn",
                "https://www.renderosity.com/users/interdatavn",
                "https://www.silverstripe.org/ForumMemberProfile/show/120379",
                "https://www.podbean.com/user-Jg0lDXf2gI3G",
                "https://imageshack.com/user/interdatavn",
                "https://www.duolingo.com/profile/interdatavn"
              ]

            })
          }} */}

{/* 
        /> */}
      </head>
      <Script
        id="tawkto"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      var Tawk_API = Tawk_API || {};
      var Tawk_LoadStart=new Date();
      (function(){
      var s1 = document.createElement( 'script' ),s0=document.getElementsByTagName( 'script' )[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/6314564e37898912e96714ac/1gc3n28u7';
      s1.charset = 'UTF-8';
      s1.setAttribute( 'crossorigin','*' );
      s0.parentNode.insertBefore( s1, s0 );
      })();
        `,
        }}
      />

      <Script
        id="facebookeEvent"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '724288035081761');
fbq('track', 'PageView');
  `,
        }}
      />

      <body className={font.className} suppressHydrationWarning>
        <noscript><iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-W5ST9ZZQ"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
        </noscript>
        <Wrapper>{children}</Wrapper>

        <noscript><iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MMT983V3"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
        </noscript>
      </body>
    </html>
  );
}

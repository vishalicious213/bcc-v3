import Head from 'next/head'
import Video from '../components/video'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us | Breast Cancer Comfort Foundation</title>
        <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-32x32.png" sizes="32x32" />
        <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon-precomposed" href="/cropped-BCCF-basket-logo-white-5001-180x180.png" />
      </Head>

      <main className={styles.main}>
          <div className='img-container'>
            <img src='/about/collage-01.jpg' alt='BCC collage of events' />
          </div>

          <section className='pink-container gift-container'>
            <div className='gift-img-container'>
                <img className='gift-img' src='gift.png' alt='wrapped gift' />
            </div>
            <div className='gift-text-container'>
                <h2 className='h2'>About Us</h2>
                <p className='no-space-above'>The Breast Cancer Comfort was established in 2015 by survivor Deborah Cavolo with a unique mission – to offer wholehearted support and motivation for women undergoing curative or preventative breast cancer treatment. By crafting personal, hand-made comfort baskets, BCC has successfully offered confidence and hope to those experiencing or recovering from this difficult journey. Packed with care items and thoughtfully chosen gifts, these comfort baskets convey a deep, inspiring message to breast cancer patients – they are not alone.</p>
                <p>To date, BCC has supplied over 1,900 comfort baskets, earning the support of major healthcare systems as well as doctors and cancer centers from all over Long Island. This would not have been possible without the consistent dedication of our team members. As our organization continues to expand, we look forward to assuming a more active role in the community. In addition to our basket deliveries, we host events, programs, and services to help people connect and offer them the emotional support they seek. The gratitude we receive in return continues to fuel our passion for serving others.</p>
                <p>For many people facing a breast cancer diagnosis, words of inspiration can uplift and even provide a mantra for living. As we strive to fulfill this goal at BCC, we hope that our actions will impart a positive, holistic impact on all the patients we encounter.</p>
            </div>
          </section>

          {/* News 12 video */}
          <Video vid="https://www.youtube.com/embed/MHCwlVk1UxQ" />
      </main>
    </div>
  )
}

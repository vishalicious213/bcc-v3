import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Teammate() {
  return (
    <div className={styles.container}>
        <Head>
            <title>Team Profile | Breast Cancer Comfort Foundation</title>
            <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-32x32.png" sizes="32x32" />
            <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-192x192.png" sizes="192x192" />
            <link rel="apple-touch-icon-precomposed" href="/cropped-BCCF-basket-logo-white-5001-180x180.png" />
        </Head>

        <main className={styles.main} id='main'>
            <div className='invisible'>
                <h1 className='invisible-text'>Ann Guarascio</h1>
                <h2 className='invisible-text'>Board Treasurer, Non-Profit Accounting Specialist</h2>
                <div className='social-media-icons'>
                    <a className='li icon' target='_blank' rel='noopener' href="https://www.linkedin.com/in/ann-guarascio-3463719/"></a>
                    {/* <a className='tw icon' target='_blank' rel='noopener' href="https://twitter.com/BreastComfort"></a> */}
                    {/* <a className='fb icon' target='_blank' rel='noopener' href="https://www.facebook.com/breastcancercomfort/"></a> */}
                    {/* <a className='ig icon' target='_blank' rel='noopener' href="https://www.instagram.com/breastcancercomfort/"></a> */}
                </div>
            </div>

            <div className='img-container'>
                <img src='/about/ann-bg.jpg' alt='Long Island waterfront with Ann Guarascio, Board Treasurer, Non-Profit Accounting Specialist, overlaid' />
            </div>

            <section className='bio'>
                <div className='bio-img-container'>
                    <img className='bio-img' src='/about/ann-profile.jpg' alt='Ann Guarascio' />
                </div>

                <div className='bio-text'>
                    <p>Ann has been involved with The Breast Cancer Comfort Foundation since 2018 in a volunteer capacity, when she began to serve the bookkeeping and accounting needs of the organization.  She brings twenty plus years of experience in the non-profit sector, with background in both financial and development roles. "I am looking forward to partaking in the the growth of this organization, and the successful outreach to the beneficiaries of The Breast Cancer Comfort Foundation."</p>
                    <p>"My life experiences have led me to reach out to others, making connections, and overall sharing compassion and knowledge." A native of Long Island's waterfront community, Ann loves all things outdoors and nautical - especially the Great South Bay.</p>
                    <p>Family is most important, so when not working, Ann thoroughly enjoys time spent with her husband Tom, their three young adult children, and three senior citizens.</p>

                    {/* <h3>SKILLS</h3> */}
                    {/* <h3>LINKS</h3> */}
                </div>
            </section>
        </main>

        <style jsx>
          {`
          #main {
            position: relative;
          }

          .bio {
            width: 100%;
            color: white;
          }

          .bio-img-container {
            margin-top: 3rem;
            display: flex;
            justify-content: center;
            width: 80%;
            margin: 3rem auto;
          }

          .bio-img {
            width: 100%;
          }
          
          .bio-text {
            width: 80%;
            margin: 3rem auto;
          }

          h2, h3 {
            font-weight: 500;
            color: #ff99cc;
          }
          
          .link {
            text-decoration: underline;
          }

          .link:hover {
            color: #b83574;
          }

          p, li {
            color: gainsboro;
          }

          span {
            color: #b83574;
          }

          .invisible {
            position: absolute;
            top: 6vw;
            left: 50%;
            color: white;
          }

          h1 {
            font-size: 5vw;
          }

          h2 {
            font-size: 3.5vw;
            color: black;
          }
          
          .invisible-text {
            position: relative;
            left: -50%;
            text-align: center;
          }

          .social-media-icons {
            position: relative;
            left: -50%;
            display: flex;
            justify-content: center;
          }

          .icon {
              width: 2.5rem;
              height: 2.5rem;
              border-radius: 50%;
          }

          .fb {
              background: url('/fb.png') no-repeat;
              background-position: center;
              background-size: contain;
          }

          .fb:hover {
              background: url('/fb2.png') no-repeat;
              background-position: center;
              background-size: contain;
          }

          .li {
              background: url('/li.png') no-repeat;
              background-position: center;
              background-size: contain;
          }

          .li:hover {
              background: url('/li2.png') no-repeat;
              background-position: center;
              background-size: contain;
          }

          .tw {
              background: url('/twitter.jpg') no-repeat;
              background-position: center;
              background-size: contain;
          }

          .tw:hover {
              background: url('/twitter2.jpg') no-repeat;
              background-position: center;
              background-size: contain;
          }

          .ig {
              background: url('/ig.png') no-repeat;
              background-position: center;
              background-size: contain;
          }

          .ig:hover {
              background: url('/ig2.png') no-repeat;
              background-position: center;
              background-size: contain;
          }
          `}
        </style>
    </div>
  )
}

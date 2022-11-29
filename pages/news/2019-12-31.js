import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import FB from '../../components/fb'

export default function Post() {
  return (
    <div className={styles.container}>
        <Head>
            <title>News | Breast Cancer Comfort Foundation</title>
            <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-32x32.png" sizes="32x32" />
            <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-192x192.png" sizes="192x192" />
            <link rel="apple-touch-icon-precomposed" href="/cropped-BCCF-basket-logo-white-5001-180x180.png" />
        </Head>

        <main className={`${styles.main} main-container`}>
            <div className='post'>
                <h2 className='no-space-below'>It's Not Too Late to Donate!!!</h2>
                <p className='no-space-above'>by <span>Debi Cavolo</span> | Dec 31, 2019</p>
                <p>It is never too late to give and now would be a great time! Help us to continue our work with women and men undergoing treatment for breast cancer. With your donation we will provide someone with a “comfort basket, bag or chemo comfort” and can even put your name on the tag!</p>
                <p>Even a small donation helps in a BIG way!</p>

                <div className='img-container'>
                    <img src='/news/2019-12-31.jpg' alt='' />
                </div>
            </div>

            <FB />
        </main>

        <style jsx>
          {`
          .main-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }

          .post {
            width: 80%;
            margin: 3rem 0 auto;
            color: white;
          }

          h2 {
            font-weight: 500;
            color: #ff99cc;
          }

          p {
            color: gainsboro;
          }

          span {
            color: #b83574;
          }

          .img-container {
              width: 50%;
              margin: auto;
          }

          img {
              width: 100%;
          }

          @media only screen and (min-width: 1024px) {
            .main-container {
              justify-content: space-between;
              width: 90%;
              margin: 0 auto;
            }

            .post {
              width: calc(100% - 380px);
            }

            .img-container {
              width: 90%;
            }
          }
          `}
        </style>
    </div>
  )
}

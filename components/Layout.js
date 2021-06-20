import Head from 'next/head';
import Styles from '../styles/Layout.module.css'


export default function Layout({title, keywords, description, children}) {
     return (
         <div>
             <Head>
                <title>{title}</title>
                 <meta name="description" content={description} />
                 <meta name="keywords" content={keywords} /> 
             </Head>

             <div className={Styles.container}>
                {children}
             </div>
         </div>
     )
 }
 

Layout.defaultProps = {
    title : 'DJ Events | Find the hottest parties',
    description : 'Find the latest DJ and other musicl events',
    keywords : 'music, dj, edm, events'
}
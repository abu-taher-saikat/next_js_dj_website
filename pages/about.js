import Link from 'next/link';
import Layout from '@/components/Layout';

const AboutPage = () => {
    return (
        <Layout title="welcome to my profile" keywords="saikat, abu, taher">
            <h1>About</h1>
            <p>This is an app to find the leatest DJ and music events</p>
            <p>Version: 1.0.0</p>
            <Link href="/">Home</Link>
        </Layout>
    )
}

export default AboutPage

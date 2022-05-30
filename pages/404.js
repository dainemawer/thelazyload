
import Layout from '@components/Layout/Layout'
import Link from 'next/link'
import Meta from '@components/Meta/Meta'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const MostPopular = dynamic(() => import('@components/MostPopular/MostPopular'))

export default function TheLazyLoad404() {
    const router = useRouter();
    const [base, setBase] = useState('')

    useEffect(() => {
        setBase(router.asPath.split('/')[1])
    }, [router])

    return (
        <Layout screen>
            <Meta page="404" />
            <div className="">
                <h1 className="text-6xl">Great Scott! The delayed initialization of this object until it was actually needed in order to save system resources was not executed.</h1>
                <h2 className="mt-0 mb-12">The item you were looking for in <Link href={`/${base}`}><a className="font-bold">{base}</a></Link> does not exist, or has been deleted.</h2>
                <MostPopular page />
            </div>
        </Layout>
    )
}
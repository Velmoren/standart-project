import Head from "next/head"
import React from "react"
import BannerTop from "../../components/BannerTop"
import Layout, {siteTitle} from "../../components/layout"
import GoodsContent from "../../components/GoodsContent"
import {getWares} from '../../action/getCategories'

Wares.getInitialProps = async () => {
    const wares = await getWares()
    return {
        wares,
    };
};

function Wares(props) {
    const namePage = "washers";
    const path_spans = "Изделия с внутренним шестигранником";
    const path_link = [
        {label: "Главная", path: "/"},
        {label: "Каталог", path: "/catalog"},
    ];

    const {wares} = props;

    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className="otherBolts">
                <div className="banner_section">
                    <div className="container">
                        <BannerTop path_link={path_link} path_spans={path_spans}/>
                    </div>
                </div>

                <div className="about_section">
                    <div className="container">
                        <GoodsContent goods={wares} namePage={namePage}/>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Wares;

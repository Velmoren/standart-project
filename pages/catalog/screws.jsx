import Head from "next/head"
import React from "react"
import BannerTop from "../../components/BannerTop"
import Layout, {siteTitle} from "../../components/layout"
import GoodsContent from "../../components/GoodsContent"
import {getScrews} from '../../action/getCategories'

Screws.getInitialProps = async () => {
    const screws = await getScrews()
    return {
        screws,
    };
};

function Screws(props) {
    const namePage = "screws";
    const path_spans = "Шурупы, винты";
    const path_link = [
        {label: "Главная", path: "/"},
        {label: "Каталог", path: "/catalog"},
    ];

    const {screws} = props;

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
                        <GoodsContent goods={screws} namePage={namePage}/>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Screws;

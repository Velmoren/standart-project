import Head from "next/head"
import React from "react"
import Layout, {siteTitle} from "../components/layout"
import BannerTop from "../components/BannerTop"
import AboutCompany from "../components/AboutCompany"
import MenuCategories from "../components/MenuCategories"
import {getOrganization} from '../action/getOrganization'

About.getInitialProps = async () => {
    const info = await getOrganization()
    return {
        info,
    };
};

function About(props) {
    const path_spans = "О компании";
    const path_link = [{label: "Главная", path: "/"}];
    const {info, incAc} = props;

    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section>
                <div className="banner_section">
                    <div className="container">
                        <BannerTop path_link={path_link} path_spans={path_spans}/>
                    </div>
                </div>
                <div className="about_section" onClick={incAc}>
                    <div className="container">
                        <div className="box">
                            <div className="left">
                                <MenuCategories/>
                            </div>
                            <div className="centerAndDolie">
                                <AboutCompany info={info}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
				@media (max-width: 991px) {
					.left {
						display: none;
					}

					.centerAndDolie {
						width: 100%;
						padding-left: 0;
						padding-right: 0;
					}
				}
			`}</style>
        </Layout>
    );
}

export default About;

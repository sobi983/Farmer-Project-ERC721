import "./Roadmap.css";
import nft from "../../images/crypt.jpeg"
const Roadmap = () => {
    return (
        <>
            <div className="container my-3">
                <div class="container my-3">
                    <div class="row text-center justify-content-center mb-5">
                        <div class="col-xl-6 col-lg-8">
                            <h2 class="font-weight-bold">Project Evolution</h2>
                            <p class="text-muted">We’re very proud of the path we’ve taken. Explore the history that made us the company we are today.</p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="timeline-steps aos-init aos-animate" data-aos="fade-up">

                                <div class="timeline-step">
                                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2004">
                                        <div class="inner-circle"></div>

                                        <p class="h6 text-muted mb-0 mb-lg-0">Alpha Launch</p>
                                    </div>
                                </div>
                                <div class="timeline-step">
                                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2005">
                                        <div class="inner-circle"></div>

                                        <p class="h6 text-muted mb-0 mb-lg-0">Closed Beta</p>
                                    </div>
                                </div>
                                <div class="timeline-step">
                                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2010">
                                        <div class="inner-circle"></div>

                                        <p class="h6 text-muted mb-0 mb-lg-0">Public Beta</p>
                                    </div>
                                </div>
                                <div class="timeline-step mb-0">
                                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2020">
                                        <div class="inner-circle"></div>
                                        ]
                                        <p class="h6 text-muted mb-0 mb-lg-0">Public Launch</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <div className="row pt-5 pb-5">
                    <div className="col-md-1"></div>

                    <div className="col-md-7 mx-auto mastermind-text pt-5">

                        <p>
                            As a team, we have developed financial market data solutions at Bloomberg, mid-market credit risk solutions at UBS and pre and post-trade derivatives analytics and tooling at CME Group. We also have deep experience in Product and Strategy and have used these experiences to develop a digital asset product suite that has parity with institutional-grade products in traditional finance.<br /><br />
                            Our goal at Crypcentra is to improve the way investors: discover, analyze and interact with digital assets — forever. Our goal is to become the new standard in digital asset research and investment.
                        </p>
                    </div>

                    <div className="col-md-4 mx-auto mastermind">
                        <img src={nft} alt=" No Pic" />
                    </div>
                </div>

            </div>
            <div className="container pb-5 project-section">
                <h1 className="m-5">Utilities</h1>
                <h1 className="text-left">Each NFT Holder receives the following benefits:</h1>
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-start my-2">
                        <div className="counter">
                            <h1>1</h1>
                        </div>
                        <div className="icon-text ">
                            <h1>Lifetime Access</h1>
                            <h2>Unrestricted, lifetime access to the entire Crypcentra platform. In the coming days, we will publish a detailed breakdown of current feature offerings — as well as a roadmap outlining future feature offerings</h2>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex my-2">
                    <div className="counter">
                            <h1>2</h1>
                        </div>
                        <div className="icon-text ">
                            <h1>Early Access</h1>
                            <h2>All NFT holders will be fully onboarded to the Crypcentra platform before the full public launch. The first cohort of users will be onboarded at closed beta. </h2>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center my-2">
                    <div className="counter">
                            <h1>3</h1>
                        </div>
                        <div className="icon-text ">
                            <h1>Priority Access</h1>
                            <h2>In future, we will be hosting a series of seminars, webinars and meet-ups, both offline and online. Every NFT holder will receive priority access to all Crypcentra-hosted events forever, as well as early ticket releases with discounted prices.</h2>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex my-2">
                    <div className="counter">
                            <h1>4</h1>
                        </div>
                        <div className="icon-text ">
                            <h1>Community</h1>
                            <h2>All NFT Holders will have access to a private Discord Channel exclusively for NFT holders, with unparalleled alpha insights by the community, for the community </h2>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-6 d-flex my-2">
                    <div className="counter">
                            <h1>5</h1>
                        </div>
                        <div className="icon-text ">
                            <h1>Subsidized Usage</h1>
                            <h2>All NFT Holders will receive a discount on their platform usage fees. Diamond NFT holders will have all of their usage fees subsidized.</h2>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-start my-2">
                    <div className="counter">
                            <h1>6</h1>
                        </div>
                        <div className="icon-text my-auto ">
                            <h1>Rental Opportunity</h1>
                            <h2>Ability to lease Utility NFT for rental income through third-party providers</h2>
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
};

export default Roadmap;

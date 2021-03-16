import React from "react";
import './WebsitesMobile.scss';
import Decorate from "../../../components/sections/Decorate";
import monitor from "../../../assets/monitor.svg";
import Content from "../../../components/sections/Content";
import database from "../../../database";
import Packages from "../../../components/sections/Packages";
import MiniContact from "../../../components/common/MiniContact";
import MobileNav from "../../../components/common/MobileNav";
import WebsiteOrder from "../../../components/common/WebsiteOrder";

function WebsitesMobile() {

    React.useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="WebsitesMobile">
            <MobileNav subpage={true}/>
            <Decorate titleView={false} mobileView={true} url={monitor} alt="Monitor wyświetlający przykładową stronę www."/>
            <Content titleView={false} header={database.website.header} headerSpan={database.website.headerSpan}
                     describe={database.website.more} id={"websites"} button={false}/>
            <Packages section={"websites"} />
            <WebsiteOrder link={"/freelance-offert-website/pricing"}/>
            <MiniContact />
        </div>
    );
}

export default WebsitesMobile;
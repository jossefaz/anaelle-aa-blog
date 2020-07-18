import React from 'react';
import Header from "../../components/header/HeaderOne";
import FooterThree from "../../components/footer/FooterThree";
import TemplateBlogDetailsWithSidebar from "../../templates/BlogDetails";
import SideHeader from "../../components/SideHeader";

const BlogDetailsLeftSidebarPage = () => {
    return (
        <div>
            <Header classes={'position-static'}/>
            <SideHeader mobile={true}/>
            <TemplateBlogDetailsWithSidebar sidebarPosition="left"/>
            <FooterThree position={'fixed'}/>
        </div>
    );
};

export default BlogDetailsLeftSidebarPage;
import React from "react";
import DraftEditor from "../../components/RichTextEditor";
import HeaderCmp from "../../components/HeaderComponent";

export default function HomePage(){
    return(
        <React.Fragment>
            <div>
                <HeaderCmp title="Home page"/>
            </div>
            <DraftEditor/>
        </React.Fragment>
    );
}
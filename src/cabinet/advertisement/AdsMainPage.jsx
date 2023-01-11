import { useState, useContext, useEffect } from "react";

import "../cabinet.sass";
import { token } from "../../App";
import MobileAdsPage from "./MobileAdsPage"
import DesktopAdsPage from "./DesktopAdsPage"
import AuthContext from "../../store/auth-context";

const AdsMainPage = (props) => {
    const [category, setCategory] = useState([]);

    const deactivateHandler = () => {
        console.log(11);
    }

    useEffect(() => {
        fetch(`https://cc19244api.tmweb.ru/category?filter[depth]=0`, {
            headers: {
                Accept: "application/json",
                Authorization: token,
            },
        })
            .then((res) => res.json())
            .then((result) => {
                setCategory(result.data);
            });
    }, []);

    const ctx = useContext(AuthContext);

    return ctx.isMobile ? <MobileAdsPage category={category} /> : <DesktopAdsPage
                                                                    category={category}
                                                                    deactivateHandler={deactivateHandler}
                                                                    />;
};

export default AdsMainPage;

import { Route, Routes } from "react-router-dom"

import { Page2 } from "../pages/Page2"
import { UrlParameter } from "../pages/UrlParameter"
import { Page404 } from "../pages/Page404"

export const Page2Routes = () => {
    return (
        <Routes>
            <Route index element={<Page2 />} />
            <Route path=":userId" element={<UrlParameter /> } />
            <Route path="*" element={<Page404 /> } />
        </Routes>
    )
}
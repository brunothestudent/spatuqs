import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./components/HomePage"
import { ProductRegistration } from "./components/ProductRegistration"


export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/table" element={<ProductRegistration />} />
            </Routes>
        </BrowserRouter>
    )
}
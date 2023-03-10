import { Route, Routes, Navigate } from "react-router-dom";
import Signin from "../auth/Signin";
import Loading from "./Loading";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={ <Loading/> } ></Route>
      <Route path="/auth/signin" element={ <Signin/> } ></Route>
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}
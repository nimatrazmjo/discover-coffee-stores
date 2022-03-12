import { NextPage } from "next";
import { useRouter } from "next/router";

const RootDynamic: NextPage = () => {
  const route = useRouter();
  return (
    <>
    user Router : {route.query.dynamic}
    </>
  )
}

export default RootDynamic
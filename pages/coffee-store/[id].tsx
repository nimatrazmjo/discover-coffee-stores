  import { NextPage } from "next";
import { useRouter } from "next/router";


const CoffeeStore: NextPage = () => {
  const router = useRouter();
  return (
   <span>Coffee store  {router.query.id}</span>
  )
}

export default CoffeeStore;
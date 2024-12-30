import { getUserInfo } from "@/api/users/users";
import { use } from "react";

export default function Home() {
  const data = use(getUserInfo(11111111111));

  console.log(data)

  return <p>{data.id}</p>
}

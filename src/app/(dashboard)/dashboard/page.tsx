import { getUserInfo } from "@/api/users/users";
import IframeBox from "@/components/IframeBox";
import { use } from "react";

export default function Home() {
  const data = use(getUserInfo(11111111111));

  console.log(data)

  return <IframeBox src={"/todo/config/page"}/>
}

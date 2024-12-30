import { getMenu } from "@/api/menu";
import { use } from "react";

export const useMenu = () => {
  const data = use(getMenu());

  console.log(data);

  return {};
};

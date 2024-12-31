import { getMenu } from "@/api/menu";
import { MenuItem } from "@/type/menu";
import { getRandomId } from "@/utils";
import { useEffect, useState } from "react";

function getBodyString(htmlString: string) {
  const regex = /<body class="layui-layout-body">([\s\S]*?)<\/body>/i;
  const match = htmlString.match(regex);

  return match ? match[1] : "";
}

export function useMenu() {
  const [menuData, setMenuData] = useState<MenuItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getMenu();

      // get the html string by regex <body>(.*)</body>
      const htmlString = getBodyString(data.data);
      const tempContainer = document.createElement("div");
      tempContainer.innerHTML = htmlString;

      //  find all class .layui-nav-item in tempContainer
      const menuItems = tempContainer?.querySelectorAll(".layui-nav-item");

      const res: MenuItem[] = [];

      // loop through menuItems
      menuItems?.forEach((menuItem) => {
        const titleDom = menuItem.querySelector("cite");
        // querySelector by attribute name lay-href
        // const children = menuItem.querySelectorAll(".layui-nav-child li");

        const item: MenuItem = {
          title: "",
          link: "",
          open: false,
          id: getRandomId(),
        };

        if (!titleDom?.textContent) {
          return;
        }
        const title = titleDom.textContent ?? "";
        if (title === "运营管理") {
          console.log("found", titleDom, menuItem);
          const list = menuItem.querySelectorAll("[lay-href]");
          console.log(list);
        }
        item.title = title;
        res.push(item);

        // 获取所有带有 'lay-href' 属性的元素
        // const elements = document.querySelectorAll('[lay-href]');
        const children = menuItem.querySelectorAll("[lay-href]");
        console.log(children);

        children.forEach((child) => {
          const title = child?.textContent ?? "";
          const link = child.getAttribute("lay-href") ?? "";
          console.log(title, link);
          if (!item.children) {
            item.children = [];
          }
          item.children.push({ title, link, id: getRandomId() });
        });
      });

      setMenuData(res);
    }
    fetchData();
  }, []);

  const toggleMenu = (id: string) => {
    setMenuData((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, open: !item.open };
        }
        return item;
      });
    });
  };

  return {
    menuData,
    toggleMenu,
  };
}

// import { useMenu } from "@/service/menu"

import { getMenu } from "@/api/menu"
import { useEffect } from "react"
import * as htmlparser2 from "htmlparser2";


export const Menu = () => {
    // const data = useMenu()
    // console.log(data)

    useEffect(() => {
        async function fetchData() {
            const data = await getMenu()
            console.log(data.data)
            const ast = htmlparser2.parseDocument(data.data)
            console.log(ast)
        }
        fetchData()
    }, [])

    return <div>Menu</div>
}
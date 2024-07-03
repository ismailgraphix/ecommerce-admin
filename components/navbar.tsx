import { UserButton } from "@clerk/nextjs";
import { MainNav } from "./main-nav";
import StoreSwitcher  from './store-switcher'
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";


const Navbar = async () =>{
    const { userId } = auth();

    if(!userId){
        redirect('/sign-in')
    }

    const stores = await prismadb.store.findMany({
        where: {
            userId
        },
    })
    return(
        <div className="border-b">
            <div className="flex h-16 py-5 items-center px-6">
                <StoreSwitcher items={stores}/>
                <MainNav/>
                <div className="ml-auto flex items-center space-x-6">
                    <UserButton afterSignOutUrl="/"/>
                </div>
                </div>
                </div>
    )
}

export default Navbar;
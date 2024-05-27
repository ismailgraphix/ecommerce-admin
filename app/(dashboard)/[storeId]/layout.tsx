import Navbar from "@/components/navbar";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
export default async function dashboardLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: { storeId: string }
}) {
    const { userId } = auth();

    if(!userId) {
        redirect('/sign-in')
    }


    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId
        }
    })
    if (!store) {
        redirect('/')
    }

    return(
        <>
        <Navbar/>
        
        {children}
        </>
    )
}
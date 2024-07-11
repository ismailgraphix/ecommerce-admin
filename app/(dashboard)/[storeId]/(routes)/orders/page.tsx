import { format } from 'date-fns';
import prismadb from "@/lib/prismadb";
import { OrderClient } from "./components/client";
import { OrderColumn } from "./components/columns";
import { formatter } from '@/lib/utils';

const OrdersPage = async ({
    params
}: {
    params: { storeId: string }
}) => {
    const orders = await prismadb.order.findMany({
        where: {
            storeId: params.storeId
        },
        include: {
            orderItems: {
                include: {
                    product: true
                }
            }
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    const formatedOrders: OrderColumn[] = orders.map((item) => ({
        id: item.id,
        name: item.name ?? '', // Ensure name is treated as string, handling null case
        phone: item.phone,
        address: item.address,
        products: item.orderItems.map((orderItem) => orderItem.product.name).join(', '),
        totalPrice: formatter.format(item.orderItems.reduce((total, orderItem) => {
            return total + Number(orderItem.product.price)
        }, 0)),
        isPaid: item.isPaid,
        createdAt: format(new Date(item.createdAt), 'MMMM do, yyyy') // Ensure createdAt is formatted correctly
    }));

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <OrderClient data={formatedOrders} />
            </div>
        </div>
    );
}

export default OrdersPage;

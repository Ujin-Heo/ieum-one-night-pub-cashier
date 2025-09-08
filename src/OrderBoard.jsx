import { useState, useEffect } from "react";
import "./OrderBoard.css"

function OrderBoard({ orders: ordersProp }) {

    const [orders, setOrders] = useState(ordersProp);

    return (
        <table className="order-board-container">
            <tr className="order-board-row order-board-header">
                <th className="order-board-col">메뉴이름</th>
                <th className="order-board-col">총 수량</th>
                <th className="order-board-col">테이블 번호</th>
            </tr>
            {orders.map((order) => {
                <tr className="order-board-row">
                    <td className="order-board-col">{order.menuName}</td>
                    <td className="order-board-col">{order.totalOrders}</td>
                    <td className="order-board-col table-icons">
                        {order.orders.map((tableNum) => {
                            <i className="table-icon">{tableNum}</i>
                        })}
                    </td>
                </tr>
            })}
        </table>
    )
}

export default OrderBoard;
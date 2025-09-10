import { useState, useEffect, useRef } from "react";
import "./OrderBoard.css"
import "./Modal.css"

function OrderBoard({ orders: ordersProp, updateCallback }) {

    const [orders, setOrders] = useState(ordersProp);
    const [showModal, setShowModal] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [selectedMenuName, setSelectedMenuName] = useState(null);

    const [moneyChecked, setMoneyChecked] = useState({});
    const isFirstRender = useRef(true);

    useEffect(() => {
        const saved = localStorage.getItem("moneyChecked");
        if (saved) {
            setMoneyChecked(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return; // 🚫 skip saving on first render
        }
        localStorage.setItem("moneyChecked", JSON.stringify(moneyChecked));
    }, [moneyChecked]);


    useEffect(() => {
        setOrders(ordersProp);
    }, [ordersProp]);

    const handleDeleteClick = (menuOrder, menuName) => {
        setSelectedOrder(menuOrder);
        setSelectedMenuName(menuName);
        setShowModal(true);
    };

    const confirmDelete = async () => {
        try {
            // update local state (remove selected menuOrder by orderId)
            setOrders((prevOrders) =>
                prevOrders
                    .map((order) => ({
                        ...order,
                        menuOrders: order.menuOrders.filter(
                            (menuOrder) => menuOrder.orderId !== selectedOrder.orderId
                        ),
                    }))
                    .filter((order) => order.menuOrders.length > 0) // 🔑 remove empty rows
            );

            // send delete request to backend
            // 해당 order의 served를 true로 만들어주세여
            await fetch(`${import.meta.env.VITE_API_BASE_URL}/delete_order`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    orderId: selectedOrder.orderId
                }),
            });

        } catch (error) {
            console.error("삭제 실패:", error);
        } finally {
            setShowModal(false);
            setSelectedOrder(null);

            updateCallback();
        }
    };

    const cancelDelete = () => {
        setShowModal(false);
        setSelectedOrder(null);
        setSelectedMenuName(null);
    };

    return (
        <>
            <table className="order-board-container">
                <thead>
                    <tr className="order-board-row order-board-header">
                        <th className="order-board-col">메뉴이름</th>
                        <th className="order-board-col">총 수량</th>
                        <th className="order-board-col">테이블 번호</th>
                    </tr>
                </thead>
                <tbody>
                    {orders?.map((order) => (
                        <tr key={order.menuName} className="order-board-row">
                            <td className="order-board-col">{order.menuName}</td>
                            <td className="order-board-col">{order.totalOrders}</td>
                            <td className="order-board-col table-icons">
                                {order.menuOrders.map((menuOrder) => {
                                    const isChecked = moneyChecked[menuOrder.orderId] || false;
                                    return (
                                        <button
                                            key={menuOrder.orderId}
                                            className="table-icon"
                                            style={{
                                                backgroundColor: isChecked ? "blue" : "var(--Black)"
                                            }}
                                            onDoubleClick={() => handleDeleteClick(menuOrder, order.menuName)}
                                            onClick={() =>
                                                setMoneyChecked((prev) => ({
                                                    ...prev,
                                                    [menuOrder.orderId]: !prev[menuOrder.orderId]
                                                }))
                                            }
                                        >
                                            {menuOrder.tableNum}
                                        </button>
                                    );
                                })}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <p className="modal-title">
                            {selectedOrder.tableNum}번 테이블에 [{selectedMenuName}]의 서빙이 되었습니까?
                        </p>
                        <div className="modal-button-container">
                            <button className="modal-button" onClick={cancelDelete}>아니오</button>
                            <button className="modal-button modal-button-blue" onClick={confirmDelete} >네</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default OrderBoard;
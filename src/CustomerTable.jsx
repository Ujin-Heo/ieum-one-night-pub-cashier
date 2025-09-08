import usersImg from "./assets/Users.svg";
import checkImg from "./assets/Check.svg";
import "./CustomerTable.css";
import { useState, useEffect } from 'react'

function CustomerTable({ tableInfo, tableNum, ordered: orderedProp = false, isShort = false, updateCallback }) {
    const tableCapacity = isShort ? 2 : 4;
    const [customerNum, setCustomerNum] = useState(0);
    const [ordered, setOrdered] = useState(orderedProp);
    const [menus, setMenus] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const element = <p>{tableNum}</p>;

    useEffect(() => {
        setCustomerNum(tableInfo?.customerNum);
        setOrdered(tableInfo?.ordered);
        setMenus(tableInfo?.menus);
        setTotalPrice(tableInfo?.totalPrice);
    }, [tableInfo]);

    const handleDeleteClick = () => {
        setShowModal(true);
    };

    const confirmDelete = async () => {
        try {
            // send delete request to backend
            // 해당 tableNum의 table을 DB에서 지워주세요
            await fetch(`${import.meta.env.VITE_API_BASE_URL}/delete_table`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    tableNum: tableNum
                }),
            });

            // update local state
            setOrdered(false);

        } catch (error) {
            console.error("삭제 실패:", error);
        } finally {
            setShowModal(false);

            //updateCallback(); // fetchTable인데 일단 굳이 실행 안 해도 될듯. DB에서 테이블이 정상적으로 삭제됐으면 이 줄의 주석을 풀어도 정상 작동해야 함.
        }
    };

    const cancelDelete = () => {
        setShowModal(false);
    };

    if (!ordered) return (
        <div className={"ct " + (isShort ? "ct-short" : "")}>
            <div className="ct-header ct-header-not-ordered">
                <div className="ct-number">{element}</div>
            </div>
        </div>
    )

    return (
        <>
            <div className={"ct ct-ordered " + (isShort ? "ct-short" : "")}>
                <div className="ct-header">
                    <div className={"ct-number ct-number-ordered"}>{element}</div>
                    <div className="ct-users">
                        <img className="ct-user-icon" src={usersImg} alt="users" />
                        <span className="ct-user-count">{customerNum}/{tableCapacity}</span>
                    </div>
                </div>

                <ul className="ct-menu-list">
                    {menus.map((menu) => (
                        <li key={menu.menuName} className="ct-menu-row">
                            <div className="ct-menu-col">
                                <span className="ct-menu-name">{menu.menuName}</span>
                            </div>
                            <div className="ct-menu-col">
                                <span className="ct-menu-count">{menu.quantity}</span>
                                {menu.served
                                    ? <span className="ct-checkbox ct-checkbox-checked">
                                        <img src={checkImg} alt="checked" />
                                    </span>
                                    : <span className="ct-checkbox"></span>
                                }
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="ct-footer">
                    <span className="ct-total">{totalPrice}</span>
                    <button
                        className="ct-clear-btn"
                        onClick={() => handleDeleteClick()}
                    >
                        테이블 비우기
                    </button>
                </div>
            </div>
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <p className="modal-title">
                            테이블 {tableNum}번을 정말 비울까요?
                        </p>
                        <div className="modal-button-container">
                            <button className="modal-button" onClick={cancelDelete}>닫기</button>
                            <button className="modal-button modal-button-red" onClick={confirmDelete} >비우기</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default CustomerTable;
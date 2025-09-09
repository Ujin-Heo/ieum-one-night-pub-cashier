import usersImg from "./assets/Users.svg";
// import checkImg from "./assets/Check.svg";
import "./CustomerTable.css";
import { useState, useEffect, useRef } from 'react'
import CustomerTable__SetInfo from "./CustomerTable__SetInfo";
import Tooltip from "./Tooltip";

function CustomerTable({ tableInfo, tableNum, ordered: orderedProp = false, isShort = false, updateCallback }) {
    const tableCapacity = isShort ? 2 : 4;
    const [customerNum, setCustomerNum] = useState(0);
    const [ordered, setOrdered] = useState(orderedProp);
    const [menus, setMenus] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [mergeSeat, setMergeSeat] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [showSetInfo, setShowSetInfo] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    const parentRef = useRef(null);

    const element = <p>{tableNum}</p>;
    const checkImg = <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
        <path d="M11.8337 1.5L4.50033 8.83333L1.16699 5.5" stroke={mergeSeat ? "#A40732" : "#2372EB"} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    const closeTooltip = () => setShowTooltip(false);

    useEffect(() => {
        setCustomerNum(tableInfo?.customerNum);
        setOrdered(tableInfo?.ordered);
        setMenus(tableInfo?.menus);
        setTotalPrice(tableInfo?.totalPrice);
    }, [tableInfo]);

    const getTableData = (customerNum, mergeSeat, ordered) => {
        setCustomerNum(customerNum);
        setMergeSeat(mergeSeat);
        setOrdered(ordered);
        setShowSetInfo(false);
    }

    const confirmDelete = async () => {
        try {
            // update local state
            setCustomerNum(0);
            setMergeSeat(false);
            setOrdered(false);

            // send delete request to backend
            // 해당 tableNum의 table을 DB에서 지워주세요
            await fetch(`${import.meta.env.VITE_API_BASE_URL}/delete_table`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    tableNum: tableNum
                }),
            });

        } catch (error) {
            console.error("삭제 실패:", error);
        } finally {
            setShowModal(false);

            //updateCallback(); // fetchTable인데 일단 굳이 실행 안 해도 될듯. DB에서 테이블이 정상적으로 삭제됐으면 이 줄의 주석을 풀어도 정상 작동해야 함.
        }
    };

    if (!ordered && !showSetInfo) return (
        <div onClick={() => setShowSetInfo(true)}>
            <div className={"ct " + (isShort ? "ct-short" : "")}>
                <div className="ct-header ct-header-not-ordered">
                    <div className="ct-number">{element}</div>
                </div>
            </div>
        </div>
    )

    if (showSetInfo) return (
        <CustomerTable__SetInfo isShort={isShort} tableNum={tableNum} updateCallback={getTableData} mergeSeat={mergeSeat} customerNum={customerNum} />
    )

    return (
        <div ref={parentRef} >
            <div className={"ct ct-ordered " + (isShort ? "ct-short " : "") + (mergeSeat ? "ct-merge-seat" : "")} onClick={() => setShowSetInfo(true)}>
                <div className="ct-header">
                    <div className={"ct-number ct-number-ordered"}>{element}</div>
                    {mergeSeat && (
                        <button
                            className="ct-merge-seat-btn"
                            onClick={(e) => { e.stopPropagation(); setShowTooltip(true); }}
                        >합석 이력</button>
                    )}
                    <div className="ct-users">
                        <img className="ct-user-icon" src={usersImg} alt="users" />
                        <span className="ct-user-count">{customerNum}/{tableCapacity}</span>
                    </div>
                </div>

                <ul className="ct-menu-list">
                    {menus?.map((menu) => (
                        <li key={menu.menuName} className="ct-menu-row">
                            <div className="ct-menu-col">
                                <span className="ct-menu-name">{menu.menuName}</span>
                            </div>
                            <div className="ct-menu-col">
                                <span className="ct-menu-count">{menu.quantity}</span>
                                {menu.served
                                    ? <span className="ct-checkbox ct-checkbox-checked">
                                        {/* <img src={checkImg} alt="checked" /> */}
                                        {checkImg}
                                    </span>
                                    : <span className="ct-checkbox"></span>
                                }
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="ct-footer">
                    <span className="ct-total">{totalPrice}원</span>
                    <button
                        className="ct-clear-btn"
                        onClick={(e) => { e.stopPropagation(); setShowModal(true) }}
                    >
                        테이블 비우기
                    </button>
                </div>
            </div>
            {
                showModal && (
                    <div className="modal-overlay">
                        <div className="modal">
                            <p className="modal-title">
                                테이블 {tableNum}번을 정말 비울까요?
                            </p>
                            <div className="modal-button-container">
                                <button className="modal-button" onClick={() => setShowModal(false)}>닫기</button>
                                <button className="modal-button modal-button-red" onClick={confirmDelete} >비우기</button>
                            </div>
                        </div>
                    </div>
                )
            }
            <Tooltip show={showTooltip} onClose={closeTooltip} parentRef={parentRef} />
        </div >
    );
}

export default CustomerTable;
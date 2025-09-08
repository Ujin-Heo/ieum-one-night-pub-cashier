import usersImg from "./assets/Users.svg";
import checkImg from "./assets/Check.svg";
import "./CustomerTable.css";
import { useState } from 'react'

function CustomerTable({ tableInfo, tableNum, ordered: orderedProp = false, isShort: isShortProp = false }) {
    const [isShort, setIsShort] = useState(isShortProp);
    const tableCapacity = isShort ? 2 : 4;
    const [customerNum, setCustomerNum] = useState(0);
    const [ordered, setOrdered] = useState(orderedProp);
    const [menus, setMenus] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const element = <p>{tableNum}</p>;

    useEffect(() => {
        setCustomerNum(tableInfo.customerNum);
        setOrdered(tableInfo.ordered);
        setMenus(tableInfo.menus);
        setTotalPrice(tableInfo.totalPrice);
    }, [tableInfo]);

    if (!ordered) return (
        <div className={"ct " + (isShort ? "ct-short" : "")}>
            <div className="ct-header ct-header-not-ordered">
                <div className="ct-number">{element}</div>
            </div>
        </div>
    )

    return (
        <div className={"ct ct-ordered " + (isShort ? "ct-short" : "")}>
            <div className="ct-header">
                <div className={"ct-number ct-number-ordered"}>{element}</div>
                <div className="ct-users">
                    <img className="ct-user-icon" src={usersImg} alt="users" />
                    <span className="ct-user-count">{customerNum}/{tableCapacity}</span>
                </div>
            </div>

            <ul className="ct-menu-list">
                {tableInfo.menus.map((menu) => {
                    <li className="ct-menu-row">
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
                })}
            </ul>

            <div className="ct-footer">
                <span className="ct-total">{totalPrice}</span>
                <button className="ct-clear-btn">테이블 비우기</button>
            </div>
        </div>
    );
}

export default CustomerTable;
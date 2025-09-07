import "./OrderBoard.css"

function OrderBoard() {

    return (
        <table className="order-board-container">
            <tr className="order-board-row order-board-header">
                <th className="order-board-col">메뉴이름</th>
                <th className="order-board-col">총 수량</th>
                <th className="order-board-col">테이블 번호</th>
            </tr>

            <tr className="order-board-row">
                <td className="order-board-col">치킨 가라아게</td>
                <td className="order-board-col">3</td>
                <td className="order-board-col table-icons">
                    <i className="table-icon">3</i>
                    <i className="table-icon">4</i>
                    <i className="table-icon">3</i>
                </td>
            </tr>

            <tr className="order-board-row">
                <td className="order-board-col">순두부찌개</td>
                <td className="order-board-col">2</td>
                <td  className="order-board-col table-icons">
                    <i className="table-icon">4</i>
                    <i className="table-icon">3</i>
                </td>
            </tr>

        </table>
    )
}

export default OrderBoard;
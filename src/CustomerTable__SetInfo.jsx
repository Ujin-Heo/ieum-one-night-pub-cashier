import "./CustomerTable"
import "./CustomerTable__SetInfo.css";
import { useState, useEffect } from 'react'

function CustomerTable__SetInfo({ isShort, tableNum, updateCallback, mergeSeat: mergeSeatProp = false, customerNum: customerNumProp }) {
    const tableCapacity = isShort ? 2 : 4;
    const [customerNum, setCustomerNum] = useState(customerNumProp);  // TODO: 이미 입력된 값이 있는 경우 그걸로 초기화하게 기능 추가
    const [mergeSeat, setMergeSeat] = useState(mergeSeatProp);

    const element = <p>{tableNum}</p>;
    const checkImg = <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
        <path d="M11.8337 1.5L4.50033 8.83333L1.16699 5.5" stroke="#FBFBFB" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    useEffect(() => {

    }, []);

    const onChange = (event) => setCustomerNum(event.target.value);

    const handleInfoConfirm = async () => {
        try {
            let ordered = false;
            if (customerNum > 0 || mergeSeat) ordered = true;

            // 입력 또는 수정된 테이블 정보를 DB에 저장함 (손님 수 정보, 합석 여부 정보 전달)
            await fetch(`${import.meta.env.VITE_API_BASE_URL}/set_table_info`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    tableNum: tableNum,
                    ordered: ordered,
                    customerNum: customerNum,
                    mergeSeat: mergeSeat
                }),
            });

            updateCallback(customerNum, mergeSeat, ordered);
        } catch (error) {
            console.error("테이블 정보 수정 실패:", error);
        } finally {

        }
    }

    return (
        <>
            <div className={"ct ct-set-info " + (isShort ? "ct-short-setinfo" : "")}>
                <div className="ct-header ct-header-not-ordered">
                    <div className="ct-number ct-number-setinfo">{element}</div>
                </div>

                <div className="ct-customer-num-container">
                    <input
                        className="ct-customer-num-input"
                        type="number"
                        value={customerNum}
                        onChange={onChange}
                    />
                    <span className="ct-customer-num-capacity">/{tableCapacity}</span>
                </div>

                <div className="ct-merge-seat-container">
                    <span className="ct-merge-seat-text">합석 want?</span>
                    <div onClick={() => setMergeSeat((prevMergeSeat) => !prevMergeSeat)}>
                        {mergeSeat ? (
                            <span className="ct-checkbox ct-checkbox-setinfo-checked">
                                {checkImg}
                            </span>
                        ) : (
                            <span className="ct-checkbox ct-checkbox-setinfo"></span>
                        )}
                    </div>
                </div>

                <div className="ct-footer">
                    <button
                        className="ct-customer-num-insert-btn"
                        type="button"
                        onClick={handleInfoConfirm}
                    >
                        인원수 입력
                    </button>
                </div>
            </div>
        </>
    );
}

export default CustomerTable__SetInfo;
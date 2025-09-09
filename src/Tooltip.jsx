// src/components/Modal.jsx
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./Tooltip.css";

function Tooltip({ show, onClose, parentRef }) {
    const [newSuccessTableNum, setNewSuccessTableNum] = useState(null);
    const [newFailTableNum, setNewFailTableNum] = useState(null);
    const [successTableList, setSuccessTableList] = useState([]);
    const [failTableList, setFailTableList] = useState([]);

    const [coords, setCoords] = useState({ top: 0, left: 0 });
    const didInit = useRef(false);

    useEffect(() => {
        if (!show) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape" || e.key === " ") {
                e.preventDefault();
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [show, onClose]);

    useEffect(() => {
        if (parentRef.current) {
            const rect = parentRef.current.getBoundingClientRect();
            setCoords({
                top: rect.top - 10, // place above parent
                left: rect.left + rect.width / 2, // horizontally center
            });
        }
    }, [parentRef]);

    useEffect(() => {
        fetchTableLists();
    }, [])

    useEffect(() => {
        if (didInit.current) {
            handleTableListChange();
        } else {
            didInit.current = true;
        }
    }, [successTableList, failTableList])

    const fetchTableLists = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/get_merge_seat_lists`);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || "알 수 없는 서버 에러");
            }

            const data = await response.json();
            setSuccessTableList(data.successTableList);
            setFailTableList(data.failTableList)

        } catch (error) {
            console.error("합석 테이블 정보 수정 실패", error);
        }
    }

    const handleTableListChange = async () => {
        try {
            await fetch(`${import.meta.env.VITE_API_BASE_URL}/edit_merge_seat_lists`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    successTableList: successTableList,
                    failTableList: failTableList,
                }),
            });

        } catch (error) {
            console.error("합석 테이블 정보 수정 실패", error);
        }
    }

    const handleSuccesSubmit = (e) => {
        e.preventDefault();

        if (isNaN(newSuccessTableNum) || newSuccessTableNum <= 0) return;

        setSuccessTableList((currentArray) => [...currentArray, newSuccessTableNum]);
        setNewSuccessTableNum("");
    }

    const handleFailSubmit = (e) => {
        e.preventDefault()

        if (isNaN(newFailTableNum) || newFailTableNum <= 0) return;

        setFailTableList((currentArray) => [...currentArray, newFailTableNum]);
        setNewFailTableNum("");
    }

    // const handleRemoveTable = async (tableNum) => {
    //     try {
    //         setSuccessTableList((prev) => prev.filter((t) => t !== tableNum));

    //         // Send delete request to backend
    //         await fetch(`${import.meta.env.VITE_API_BASE_URL}/delete_success_table`, {
    //             method: "POST", // or DELETE depending on your API design
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({ tableNum }),
    //         });
    //     } catch (error) {
    //         console.error("테이블 삭제 실패:", error);
    //         // If it fails, you may want to refetch from DB to stay in sync
    //         fetchTableLists();
    //     }
    // };


    if (!show) return null;

    return createPortal(

        <div className="tooltip-modal-overlay" onClick={() => { onClose() }} > {/*onClick={onClose}*/}
            <div
                className="tooltip-modal"
                style={{
                    position: "absolute",
                    top: coords.top + "px",
                    left: coords.left + "px",
                    transform: "translate(-65%, 25%)", // shift left & above parent
                    background: "#fff",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    padding: "10px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                    zIndex: 9999,
                }}
                onClick={(e) => e.stopPropagation()}
            >

                <div className="beak">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 11.9492L11.6569 6.29236L6 0.63551L0.343146 6.29236L6 11.9492Z" fill="white" />
                    </svg>
                </div>
                <div class="status-card">
                    {/* 성공 Section */}
                    <div className="status-container">
                        <div class="status-header status-header-success">
                            성공 <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <g clip-path="url(#clip0_4210_5355)">
                                    <path d="M13.75 6.92467V7.49967C13.7492 8.84743 13.3128 10.1588 12.5058 11.2383C11.6989 12.3178 10.5646 13.1075 9.2721 13.4896C7.97964 13.8717 6.59829 13.8259 5.33404 13.3588C4.0698 12.8917 2.99041 12.0285 2.25685 10.8978C1.52329 9.76719 1.17487 8.42971 1.26355 7.08487C1.35223 5.74002 1.87325 4.45987 2.74892 3.43534C3.6246 2.41081 4.80799 1.69679 6.12262 1.39976C7.43725 1.10274 8.81267 1.23863 10.0438 1.78717M13.75 2.49967L7.5 8.75592L5.625 6.88092" stroke="#07A411" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_4210_5355">
                                        <rect width="15" height="15" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg></span>
                        </div>
                        <div className="status-content">
                            <ul class="status-list">
                                {successTableList?.map((tableNum) => (
                                    <li key={tableNum} class="status-item status-item-success" onClick={() => handleRemoveTable(tableNum)}>테이블 {tableNum}</li>
                                ))}
                            </ul>
                            <form class="status-actions" onSubmit={handleSuccesSubmit}>
                                <input
                                    className="status-table-num-input"
                                    type="number"
                                    value={newSuccessTableNum}
                                    onChange={(event) => setNewSuccessTableNum(event.target.value)}
                                />
                                <button type="submit" class="status-add-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path d="M8.49967 3.33398V12.6673M3.83301 8.00065H13.1663" stroke="#FBFBFB" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* 거절 Section */}
                    <div className="status-container">
                        <div class="status-header status-header-fail">
                            거절 <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <g clip-path="url(#clip0_4210_5361)">
                                    <path d="M9.375 5.625L5.625 9.375M5.625 5.625L9.375 9.375M13.75 7.5C13.75 10.9518 10.9518 13.75 7.5 13.75C4.04822 13.75 1.25 10.9518 1.25 7.5C1.25 4.04822 4.04822 1.25 7.5 1.25C10.9518 1.25 13.75 4.04822 13.75 7.5Z" stroke="#A40732" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_4210_5361">
                                        <rect width="15" height="15" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg></span>
                        </div>
                        <div className="status-content">
                            <ul class="status-list">
                                {failTableList?.map((tableNum) => (
                                    <li class="status-item status-item-fail">테이블 {tableNum}</li>
                                ))}
                            </ul>
                            <form class="status-actions" onSubmit={handleFailSubmit}>
                                <input
                                    className="status-table-num-input"
                                    type="text"
                                    value={newFailTableNum}
                                    onChange={(event) => setNewFailTableNum(event.target.value)}
                                />
                                <button type="submit" class="status-add-btn" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path d="M8.49967 3.33398V12.6673M3.83301 8.00065H13.1663" stroke="#FBFBFB" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ,
        document.body
    );
}

export default Tooltip;

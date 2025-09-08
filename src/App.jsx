import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

import TopTableSection from './TopTableSection';
import BottomTableSection from './BottomTableSection';
import OrderBoard from './OrderBoard';

function App() {
  const [tables, setTables] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchTables();
    fetchOrders();
  }, []);

  const fetchTables = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/get_tables` // 백엔드로부터 테이블별 주문 현황 정보를 가져옴
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "알 수 없는 서버 에러");
      }

      const data = await response.json();
      setTables(data.tables);

    } catch (error) {
      console.error("테이블 정보를 불러오는 데 실패했습니다.:", error);
    }
  }

  const fetchOrders = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/get_orders` // 백엔드로부터 메뉴별 주문 현황 정보를 가져옴
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "알 수 없는 서버 에러");
      }

      const data = await response.json();
      setOrders(data.orders);

    } catch (error) {
      console.error("주문 목록 정보를 불러오는 데 실패했습니다.:", error);
    }
  }

  return (
    <div className="main-bg">
      {/* <div className="counter">카운터</div> */}
      {/* <div className="kitchen">주방</div> */}
      {/* <div className="screen1">screen</div> */}
      {/* <div className="screen2">screen</div> */}
      <div className="table-section">
        <TopTableSection tables={tables} />
        <BottomTableSection tables={tables} />
      </div>

      <OrderBoard orders={orders} />

    </div>
  );
}

export default App

# 이음 일일호프 카운터 페이지

React + Vite

<백엔드에 다음의 4가지 endpoint가 필요함>

1. /get_tables

-   http method: GET
-   백엔드로부터 테이블별 주문 현황 정보를 가져옴 (테이블 표시용)
-   33개 테이블의 정보를 리스트에 담아 json 형태로 보내줘야 함.
-   App.jsx의 fetchTables 함수 참고
-   프론트로 보내줄 json의 포멧은 /test_backend/main.py의 get_tables 함수 참고

2. /get_orders

-   http method: GET
-   백엔드로부터 메뉴별 주문 현황 정보를 가져옴 (주문목록 표시용)
-   App.jsx의 fetchOrders 함수 참고
-   프론트로 보내줄 json의 포멧은 /test_backend/main.py의 get_orders 함수 참고

3. /delete_table

-   http method: POST
-   테이블 비우기 버튼을 눌렀을 때 실행. DB에서 해당 테이블의 데이터를 삭제함.
-   CustomerTable.jsx의 confirmDelete 함수 참고

4. /delete_order

-   http method: POST
-   메뉴가 서빙 완료된 후 주문 목록에서 삭제 시 실행. 프론트엔드에서 서빙된 주문의 id를 보내줌. DB에서 해당 주문의 served 값을 true로 바꿔줌.
-   OrderBoard.jsx의 confirmDelete 함수 참고

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

5. /set_table_info

-   http method: POST
-   손님이 입장하면 일행이 몇 명인지, 합석 할 건지 물어 본 후 테이블에 추가함. 그러면 아래와 같은 json 형태로 DB에 데이터 보냄.

```json
{
    "tableNum": "(정수)",
    "ordered": "(boolean: 빈 테이블인지 아닌지를 전달함 -> 빈 테이블이면 false, 손님이 온 테이블이면 true)",
    "customerNum": "(정수 -> 손님 수)",
    "mergeSeat": "(bool -> 합석 할 의향 있으면 true)"
}
```

-   CustomerTable\_\_SetInfo.jsx의 handleInfoConfirm 함수 참고

6. /get_merge_seat_lists

-   http method: GET
-   "합석 이력" 버튼 눌렀을 때 합석 성공/거절 테이블 목록 불러올 때 사용
-   다른 데이터랑 연결될 필요 없음. 얘네만 따로 놀음.
-   아래 json 형태로 보내주면 됨

```json
    {
    "successTableList": [1,2,3,...],
    "failTableList": [4,5,6,...]
    }
```

-   Tooltip.jsx의 fetchTableLists 함수 참고

7. /edit_merge_seat_lists

-   http method: POST
-   성공/거절 테이블 목록이 업데이트되면 DB로 전송함
-   아래 json 형태로 전송함. /get_merge_seat_lists에서의 형식과 동일함.

```json
{
"successTableList": [1,2,3,...],
"failTableList": [4,5,6,...]
}
```

-   Tooltip.jsx의 handleTableListChange 함수 참고

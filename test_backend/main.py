from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import json


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/get_tables")
async def get_tables():
    # with open("tables.json") as f:
    #     tables_json = json.load(f)
    #     return tables_json

    return {
        "tables": [
            {"dummy": "tableNum으로 바로 인덱싱할 수 있게 앞에 넣은 더미 데이터"},
            {
                "tableNum": 1,
                "customerNum": 3,
                "ordered": True,
                "menus": [
                    {"menuName": "치킨 가라아게", "quantity": 1, "served": False},
                    {"menuName": "순두부찌개", "quantity": 2, "served": True},
                ],
                "totalPrice": 52000,
            },
            {
                "tableNum": 2,
                "customerNum": 3,
                "ordered": True,
                "menus": [
                    {"menuName": "치킨 가라아게", "quantity": 1, "served": False},
                    {"menuName": "순두부찌개", "quantity": 2, "served": True},
                ],
                "totalPrice": 52000,
            },
            {
                "tableNum": 3,
                "customerNum": 0,
                "ordered": False,
                "menus": [],
                "totalPrice": 0,
            },
            {
                "tableNum": 4,
                "customerNum": 0,
                "ordered": False,
                "menus": [],
                "totalPrice": 0,
            },
            {
                "tableNum": 5,
                "customerNum": 0,
                "ordered": False,
                "menus": [],
                "totalPrice": 0,
            },
            {
                "tableNum": 6,
                "customerNum": 0,
                "ordered": False,
                "menus": [],
                "totalPrice": 0,
            },
            {
                "tableNum": 7,
                "customerNum": 0,
                "ordered": False,
                "menus": [],
                "totalPrice": 0,
            },
            {
                "tableNum": 8,
                "customerNum": 0,
                "ordered": False,
                "menus": [],
                "totalPrice": 0,
            },
            {
                "tableNum": 9,
                "customerNum": 0,
                "ordered": False,
                "menus": [],
                "totalPrice": 0,
            },
            {
                "tableNum": 10,
                "customerNum": 0,
                "ordered": False,
                "menus": [],
                "totalPrice": 0,
            },
            {
                "tableNum": 11,
                "customerNum": 0,
                "ordered": False,
                "menus": [],
                "totalPrice": 0,
            },
            {
                "tableNum": 12,
                "customerNum": 0,
                "ordered": False,
                "menus": [],
                "totalPrice": 0,
            },
            {
                "tableNum": 13,
                "customerNum": 0,
                "ordered": False,
                "menus": [],
                "totalPrice": 0,
            },
            {
                "tableNum": 14,
                "customerNum": 0,
                "ordered": False,
                "menus": [],
                "totalPrice": 0,
            },
            {
                "tableNum": 15,
                "customerNum": 0,
                "ordered": False,
                "menus": [],
                "totalPrice": 0,
            },
            {
                "tableNum": 16,
                "customerNum": 0,
                "ordered": False,
                "menus": [],
                "totalPrice": 0,
            },
            {
                "tableNum": 17,
                "customerNum": 0,
                "ordered": False,
                "menus": [],
                "totalPrice": 0,
            },
            {
                "tableNum": 18,
                "customerNum": 0,
                "ordered": False,
                "menus": [],
                "totalPrice": 0,
            },
            {
                "tableNum": 19,
                "customerNum": 0,
                "ordered": False,
                "menus": [],
                "totalPrice": 0,
            },
            {
                "tableNum": 20,
                "customerNum": 0,
                "ordered": False,
                "menus": [],
                "totalPrice": 0,
            },
            {
                "tableNum": 21,
                "customerNum": 0,
                "ordered": False,
                "menus": [],
                "totalPrice": 0,
            },
            {
                "tableNum": 22,
                "customerNum": 0,
                "ordered": False,
                "menus": [],
                "totalPrice": 0,
            },
            {
                "tableNum": 23,
                "customerNum": 0,
                "ordered": False,
                "menus": [],
                "totalPrice": 0,
            },
            {
                "tableNum": 24,
                "customerNum": 0,
                "ordered": False,
                "menus": [],
                "totalPrice": 0,
            },
            {
                "tableNum": 25,
                "customerNum": 0,
                "ordered": False,
                "menus": [],
                "totalPrice": 0,
            },
            {
                "tableNum": 26,
                "customerNum": 0,
                "ordered": False,
                "menus": [],
                "totalPrice": 0,
            },
            {
                "tableNum": 27,
                "customerNum": 0,
                "ordered": False,
                "menus": [],
                "totalPrice": 0,
            },
            {
                "tableNum": 28,
                "customerNum": 0,
                "ordered": False,
                "menus": [],
                "totalPrice": 0,
            },
            {
                "tableNum": 29,
                "customerNum": 0,
                "ordered": False,
                "menus": [],
                "totalPrice": 0,
            },
            {
                "tableNum": 30,
                "customerNum": 0,
                "ordered": False,
                "menus": [],
                "totalPrice": 0,
            },
            {
                "tableNum": 31,
                "customerNum": 0,
                "ordered": False,
                "menus": [],
                "totalPrice": 0,
            },
            {
                "tableNum": 32,
                "customerNum": 0,
                "ordered": False,
                "menus": [],
                "totalPrice": 0,
            },
            {
                "tableNum": 33,
                "customerNum": 3,
                "ordered": True,
                "menus": [
                    {"menuName": "치킨 가라아게", "quantity": 1, "served": False},
                    {"menuName": "순두부찌개", "quantity": 2, "served": True},
                ],
                "totalPrice": 52000,
            },
        ]
    }


@app.get("/get_orders")
async def get_orders():
    # with open("orders.json") as f:
    #     orders_json = json.load(f)
    #     return orders_json
    return {
        "orders": [
            {
                "menuName": "치킨 가라아게",
                "menuOrders": [
                    {"orderId": 1, "tableNum": 3},
                    {"orderId": 2, "tableNum": 4},
                    {"orderId": 3, "tableNum": 3},
                ],
                "totalOrders": 3,
            },
            {
                "menuName": "순두부찌개",
                "menuOrders": [
                    {"orderId": 4, "tableNum": 3},
                    {"orderId": 5, "tableNum": 4},
                ],
                "totalOrders": 2,
            },
        ]
    }


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)

 export const data = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [
    {
        id: 1,
        name: "Prateek",
    },
    {
        id: 2,
        name: "Shamim",
    },
    {
        id: 3,
        name: "Rahim",
    },
    {
        id: 4,
        name: "Amit",
    }
]
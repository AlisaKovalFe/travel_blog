const a = [
    [
        {
            title: 'a',
            id: 1
        },

        {
            title: 'b',
            id: 2
        },
    ],

    [
        {
            title: 'c',
            id: 3
        },

        {
            title: 'd',
            id: 4
        },
    ]
]

let b = a.map((el) => {
         return el.map((el) => {
            return {
                heading: el.title,
                key: el.id 
            }
        })
}).flat()

console.log(b);
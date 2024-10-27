// import image1 from './images/men trouser/black men trouser 1.webp'

export const products = [
    {
        id: 1,
        name: "Men Trouser",
        size: ["XS", "S", "M", "L", "XL"],
        description: "This is men trouser which can be dressed during all seasons and it is new fashion men trouser.",
        price: "$400",
        variety: [
            {
                id: 11,
                color: "black",
                image: `${process.env.PUBLIC_URL}images/men trouser/black men trouser 1.webp`,
                inCart: false
            },
            {
                id: 12,
                color: "blue black",
                image: `${process.env.PUBLIC_URL}images/men trouser/blue black men trouser 1.webp`,
                inCart: false
            },
            {
                id: 13,
                color: "brown",
                image: `${process.env.PUBLIC_URL}images/men trouser/brown men trouser 1.webp`,
                inCart: false
            },
            {
                id: 14,
                color: "light grey",
                image: `${process.env.PUBLIC_URL}images/men trouser/light grey men trouser 1.webp`,
                inCart: false
            }
        ]
    },
    {
        id: 2,
        name: "Men Blouse",
        size: ["XS", "S", "M", "L", "XL"],
        description: "This is men blouse which can be dressed during all seasons and it is new fashion men blouse.",
        price: "$200",
        variety: [
            {
                id: 21,
                color: "brown",
                image: `${process.env.PUBLIC_URL}images/men blouse/brown men blouse 1.webp`,
                inCart: false
            },
            {
                id: 22,
                color: "dark grey",
                image: `${process.env.PUBLIC_URL}images/men blouse/grey men blouse 1.webp`,
                inCart: false
            },
            {
                id: 23,
                color: "jeans",
                image: `${process.env.PUBLIC_URL}images/men blouse/jeans men blouse 1.webp`,
                inCart: false
            },
            {
                id: 24,
                color: "white",
                image: `${process.env.PUBLIC_URL}images/men blouse/light grey men blouse 1.webp`,
                inCart: false
            },
        ]
    },
    {
        id: 3,
        name: "Men t-shirt",
        size: ["XS", "S", "M", "L", "XL"],
        description: "This is men t-shirt which can be dressed during all seasons and it is new fashion men t-shirt.",
        price: "$150",
        variety: [
            {
                id: 31,
                color: "black",
                image: `${process.env.PUBLIC_URL}images/men t-shirt/black men 1.webp`,
                inCart: false
            },
            {
                id: 32,
                color: "blue",
                image: `${process.env.PUBLIC_URL}images/men t-shirt/blue men 1.webp`,
                inCart: false
            },
            {
                id: 33,
                color: "brown",
                image: `${process.env.PUBLIC_URL}images/men t-shirt/brown 1.webp`,
                inCart: false
            },
            {
                id: 34,
                color: "grey",
                image: `${process.env.PUBLIC_URL}images/men t-shirt/grey men 1.webp`,
                inCart: false
            },
            {
                id: 35,
                color: "white",
                image: `${process.env.PUBLIC_URL}images/men t-shirt/white men 1.webp`,
                inCart: false
            },
            {
                id: 36,
                color: "yellow",
                image: `${process.env.PUBLIC_URL}images/men t-shirt/yellow men 1.webp`,
                inCart: false
            },
        ]
    },
    {
        id: 4,
        name: "Women Dress",
        size: ["XS", "S", "M", "L", "XL"],
        description: "This is women dress which can be dressed during all seasons and it is new fashion women dress.",
        price: "$550",
        variety: [
            {
                id: 41,
                color: "black",
                image: `${process.env.PUBLIC_URL}images/women dress/black women dress 1.webp`,
                inCart: false
            },
            {
                id: 42,
                color: "red",
                image: `${process.env.PUBLIC_URL}images/women dress/red women dress 1.webp`,
                inCart: false
            }
        ]
    },
    {
        id: 5,
        name: "Women Pants",
        size: ["XS", "S", "M", "L", "XL"],
        description: "This is women pant which can be dressed during all seasons and it is new fashion women pant gives you elegant office look.",
        price: "$700",
        variety: [
            {
                id: 51,
                color: "black",
                image: `${process.env.PUBLIC_URL}images/women pants/black 1.webp`,
                inCart: false
            },
            {
                id: 52,
                color: "green",
                image: `${process.env.PUBLIC_URL}images/women pants/green 1.webp`,
                inCart: false
            }
        ]
    },
    {
        id: 6,
        name: "Women Shapy Skirt",
        size: ["XS", "S", "M", "L", "XL"],
        description: "This is women skirt which can be dressed during all seasons and it is new fashion women skirt gives you elegant look.",
        price: "$300",
        variety: [
            {
                id: 61,
                color: "black",
                image: `${process.env.PUBLIC_URL}images/women shapy skirt/black dress 1.webp`,
                inCart: false
            },
            {
                id: 62,
                color: "blue",
                image: `${process.env.PUBLIC_URL}images/women shapy skirt/blue dress 1.webp`,
                inCart: false
            },
            {
                id: 63,
                color: "red",
                image: `${process.env.PUBLIC_URL}images/women shapy skirt/red dress 11.webp`,
                inCart: false
            }
        ]
    },
    {
        id: 7,
        name: "Women Skirt",
        size: ["XS", "S", "M", "L", "XL"],
        description: "This is women skirt which can be dressed during all seasons and it is new fashion women skirt gives you elegant look.",
        price: "$400",
        variety: [
            {
                id: 71,
                color: "black",
                image: `${process.env.PUBLIC_URL}images/women skirt/black skirt 1.webp`,
                inCart: false
            },
            {
                id: 72,
                color: "blue",
                image: `${process.env.PUBLIC_URL}images/women skirt/blue skirt 1.webp`,
                inCart: false
            },
            {
                id: 73,
                color: "red",
                image: `${process.env.PUBLIC_URL}images/women skirt/red dress 1.webp`,
                inCart: false
            }
        ]
    },
    {
        id: 8,
        name: "Women Trouser",
        size: ["XS", "S", "M", "L", "XL"],
        description: "This is women trouser which can be dressed during all seasons and it is new fashion women trouser.",
        price: "$380",
        variety: [
            {
                id: 81,
                color: "claret",
                image: `${process.env.PUBLIC_URL}images/women trouser/claret women trouser 1.webp`,
                inCart: false
            },
            {
                id: 82,
                color: "dark grey",
                image: `${process.env.PUBLIC_URL}images/women trouser/dark grey women trouser 1.webp`,
                inCart: false
            },
            {
                id: 83,
                color: "light grey",
                image: `${process.env.PUBLIC_URL}images/women trouser/light grey womrn trouser 1.webp`,
                inCart: false
            },
            {
                id: 84,
                color: "white",
                image: `${process.env.PUBLIC_URL}images/women trouser/white women trouser 1.webp`,
                inCart: false
            }
        ]
    }
]
export type Food = "meet" | "sausage" | "chicken" | "garlicBread";

export const numberOfPeople: Record<Food, number> = {
    meet: 400,
    sausage: 200,
    chicken: 200,
    garlicBread: 100,
};

export const foodsName: Record<string, string> = {
    meet: "Meet",
    sausage: "Sausage",
    chicken: "Chicken",
    garlicBread: "Garlic Bread",
}
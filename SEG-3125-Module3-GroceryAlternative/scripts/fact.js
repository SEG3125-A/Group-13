var facts = [
    {
        factID: "peanuts",
        text: "Did you know that peanuts aren't actually nuts? They're part of the legume family!",
        factnum: 0
    },
    {
        factID: "pistachios",
        text: "Did you know pistachios aren't nuts? They're actually fruits!",
        factnum: 1
    },
    {
        factID: "broccolisteak",
        text: "Broccoli contains more protein than steak!",
        factnum: 2
    },
    {
        factID: "space potatoes",
        text: "Space fact!<br>Potatoes were the first food planted in space.",
        factnum: 3
    },
    {
        factID: "space applesauce",
        text: "Space fact!<br>Applesauce was the first food eaten in space.",
        factnum: 4
    },
    {
        factID: "cucumber water",
        text: "Did you know that cucumbers are 95% water?",
        factnum: 5
    },
    {
        factID: "honey creation",
        text: "Bees use their saliva to process pollen to make honey.",
        factnum: 6
    },
    {
        factID: "honey expire",
        text: "Honey never goes bad! Crystallized honey can be heated into a liquid again.",
        factnum: 7
    },
    {
        factID: "almonds",
        text: "Did you know that almonds aren't nuts? They're actually seeds!",
        factnum: 8
    },
    {
        factID: "cotton candy",
        text: "Cotton candy was created by a dentist.",
        factnum: 9
    },
    {
        factID: "strawberries",
        text: "Strawberries aren't actually berries, because their seeds are on the outside of the fruit!",
        factnum: 10
    },
    {
        factID: "bananas radioactive",
        text: "Did you know that bananas are radioactive? They set off detectors at the borders!",
        factnum: 11
    },
    {
        factID: "lemon lime float",
        text: "Did you know that lemons float in water, but limes don't? Try it out!",
        factnum: 12
    },
    {
        factID: "rotten eggs",
        text: "Rotten eggs will float in water. Try it out!",
        factnum: 13
    },
    {
        factID: "sandwich",
        text: "The modern sandwich was popularized by John Montagu, the 4th Earl of Sandwich.",
        factnum: 14
    },
    {
        factID: "fish acid",
        text: "Lemon or lime juice can neutralize fishy odour when cooking. Try it out!",
        factnum: 15
    }
];

function changeFact() {
    // Get p element
    let factElem = document.getElementById("FactText");

    // Clear the text
    factElem.innerHTML = "";

    let newFact = randomizeFact();

    factElem.innerHTML = newFact.text;
}

function randomizeFact() {
    return facts[Math.floor(Math.random() * facts.length)];
}
var programming_languages = [
    { phrase: "eNodeB", hint: "The base stations in 4G LTE networks. " },
    { phrase: "LTE", hint: "Standard for wireless broadband " },
    { phrase: "VOLTE", hint: "Stands for 'Voice over Long Term Evolution'." },
    { phrase: "SET TOP BOX", hint: "Device needed to receive and watch digital television on a ordinary television." },
    { phrase: "Optical Network Terminal", hint: "Refers to the consumer end equipment in an optical Fiber link" },
    { phrase: "Home Termination Box", hint: "Compact fiber wall outlet at the final fiber termination point in the customer premises" },
    { phrase: "Average revenue per user", hint: "The total revenue divided by the number of subscribers" },
    { phrase: "Recharge", hint: "Done to increase validity of pre-paid account" },
    { phrase: "Primary", hint: "_________ Rate Interface allows for 23 concurrent transmissions of voice, data, or video traffic between the network and the user." },
    { phrase: "Secondary", hint: "" },
    { phrase: "eKYC", hint: "Digital process to verify the identity of customers." },
    { phrase: "SIM", hint: "A microchip that connects it to a particular phone network." },
    { phrase: "Acquisition", hint: "The process of gaining a new customer" },
    { phrase: "Postpaid", hint: "The payment for services are made, after the services are used" },
    { phrase: "Prepaid", hint: "Credit is purchased in advance of service use" },
    { phrase: "JioFi", hint: "Allows multiple users and mobile devices to access Jio's 4G high-speed internet connectivity and create a personal Wi-Fi hotspot." },
    { phrase: "JioFiber", hint: "Fiber internet broadband service by Jio" },
    { phrase: "Centrex", hint: "Central office-based telecommunications system owned by an outside service provider. " },
    { phrase: "Leased Line", hint: "A private telecommunications circuit between two or more geographically distant locations." },
    { phrase: "VPN", hint: "Provides privacy, anonymity and security to users by creating a private network connection across a public network connection." },
];

export function randWord() {
    return programming_languages[Math.floor(Math.random() * programming_languages.length)]
}
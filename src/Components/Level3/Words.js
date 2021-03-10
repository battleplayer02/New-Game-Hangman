var programming_languages = [
    { phrase: "eNodeB", hint: "The base stations in 4G LTE networks. " ,ques:"Question 1 ?"},
    { phrase: "LTE", hint: "Standard for wireless broadband " ,ques:"Question 1 ?"},
    { phrase: "VOLTE", hint: "Stands for 'Voice over Long Term Evolution'." ,ques:"Question 1 ?"},
    { phrase: "SET TOP BOX", hint: "Device needed to receive and watch digital television on a ordinary television." ,ques:"Question 1 ?"},
    { phrase: "Optical Network Terminal", hint: "Refers to the consumer end equipment in an optical Fiber link" ,ques:"Question 1 ?"},
    { phrase: "Home Termination Box", hint: "Compact fiber wall outlet at the final fiber termination point in the customer premises" ,ques:"Question 1 ?"},
    { phrase: "Average revenue per user", hint: "The total revenue divided by the number of subscribers" ,ques:"Question 1 ?"},
    { phrase: "Recharge", hint: "Done to increase validity of pre-paid account" ,ques:"Question 1 ?"},
    { phrase: "Primary", hint: "_________ Rate Interface allows for 23 concurrent transmissions of voice, data, or video traffic between the network and the user." ,ques:"Question 1 ?"},
    { phrase: "Secondary", hint: "Sec" ,ques:"Question 1 ?"},
    { phrase: "eKYC", hint: "Digital process to verify the identity of customers." ,ques:"Question 1 ?"},
    { phrase: "SIM", hint: "A microchip that connects it to a particular phone network." ,ques:"Question 1 ?"},
    { phrase: "Acquisition", hint: "The process of gaining a new customer" ,ques:"Question 1 ?"},
    { phrase: "Prepaid", hint: "Credit is purchased in advance of service use" ,ques:"Question 1 ?"},
    { phrase: "JioFi", hint: "Allows multiple users and mobile devices to access Jio's 4G high-speed internet connectivity and create a personal Wi-Fi hotspot." ,ques:"Question 1 ?"},
    { phrase: "JioFiber", hint: "Fiber internet broadband service by Jio" ,ques:"Question 1 ?"},
    { phrase: "Centrex", hint: "Central office-based telecommunications system owned by an outside service provider. " ,ques:"Question 1 ?"},
    { phrase: "Leased Line", hint: "A private telecommunications circuit between two or more geographically distant locations." ,ques:"Question 1 ?"},
    { phrase: "VPN", hint: "Provides privacy, anonymity and security to users by creating a private network connection across a public network connection." ,ques:"Question 1 ?"},
];

export function randWord() {
    return programming_languages[Math.floor(Math.random() * programming_languages.length)]
}
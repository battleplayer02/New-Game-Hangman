var programming_languages = [
    { phrase: "eNodeB", ques: "The base stations in 4G LTE networks. " ,hint:"Question 1 ?"},
    { phrase: "LTE", ques: "Standard for wireless broadband " ,hint:"Question 1 ?"},
    { phrase: "VOLTE", ques: "Stands for 'Voice over Long Term Evolution'." ,hint:"Question 1 ?"},
    { phrase: "SET TOP BOX", ques: "Device needed to receive and watch digital television on a ordinary television." ,hint:"Question 1 ?"},
    { phrase: "Optical Network Terminal", ques: "Refers to the consumer end equipment in an optical Fiber link" ,hint:"Question 1 ?"},
    { phrase: "Home Termination Box", ques: "Compact fiber wall outlet at the final fiber termination point in the customer premises" ,hint:"Question 1 ?"},
    { phrase: "Average revenue per user", ques: "The total revenue divided by the number of subscribers" ,hint:"Question 1 ?"},
    { phrase: "Recharge", ques: "Done to increase validity of pre-paid account" ,hint:"Question 1 ?"},
    { phrase: "Primary", ques: "_________ Rate Interface allows for 23 concurrent transmissions of voice, data, or video traffic between the network and the user." ,hint:"Question 1 ?"},
    { phrase: "Secondary", ques: "Sec" ,hint:"Question 1 ?"},
    { phrase: "eKYC", ques: "Digital process to verify the identity of customers." ,hint:"Question 1 ?"},
    { phrase: "SIM", ques: "A microchip that connects it to a particular phone network." ,hint:"Question 1 ?"},
    { phrase: "Acquisition", ques: "The process of gaining a new customer" ,hint:"Question 1 ?"},
    { phrase: "Prepaid", ques: "Credit is purchased in advance of service use" ,hint:"Question 1 ?"},
    { phrase: "JioFi", ques: "Allows multiple users and mobile devices to access Jio's 4G high-speed internet connectivity and create a personal Wi-Fi hotspot." ,hint:"Question 1 ?"},
    { phrase: "JioFiber", ques: "Fiber internet broadband service by Jio" ,hint:"Question 1 ?"},
    { phrase: "Centrex", ques: "Central office-based telecommunications system owned by an outside service provider. " ,hint:"Question 1 ?"},
    { phrase: "Leased Line", ques: "A private telecommunications circuit between two or more geographically distant locations." ,hint:"Question 1 ?"},
    { phrase: "VPN", ques: "Provides privacy, anonymity and security to users by creating a private network connection across a public network connection." ,hint:"Question 1 ?"},
];

export function randWord() {
    return programming_languages[Math.floor(Math.random() * programming_languages.length)]
}
const phoneBook = [
  {
    name: "Arto Hellas",
    number: "123-987-7568",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
];

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true,
};

export const phoneBookHandler = async (event) => {
  const httpMethod = event.httpMethod;
  console.log(event);

  switch (httpMethod) {
    case "GET":
      return {
        statusCode: 200,
        body: JSON.stringify(phoneBook),
        headers,
      };
    case "POST":
      const phoneBookDetail = JSON.parse(event.body);
      phoneBook.push(phoneBookDetail);
      return {
        statusCode: 200,
        body: JSON.stringify(phoneBookDetail),
        headers,
      };

    case "DELETE":
      const id = event.pathParameters.id;
      const nonMatchingPhoneBook = phoneBook.filter((pBook) => pBook.id !== id)
      phoneBook = nonMatchingPhoneBook
      if (matchingPhoneBookDetail !== true) {
        return {
          statusCode: 404,
          body: JSON.stringify({ message: "NOT FOUND" }),
          headers,
        };
      }

      return {
        statusCode: 200,
        body: JSON.stringify(matchingPhoneBookDetail),
        headers,
      };
    
    default:
      return {
        statusCode: 405,
        body: JSON.stringify({ message: "Method not allowed" }),
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      };
  }
};


## Getting Started

### Prerequisites

- Node.js
- npm
- mongodb

### Installation

1. Clone the repository:
    ```sh
    git clone git@github.com:shivangkushwaha/company-product-task
    cd task
    ```

2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the server:
    ```sh
    npm start
    ```

### Curl request to test all Endpoints

1. Create Orgnization
```curl --location 'http://localhost:3000/api/company' \
--form 'file=@"/C:/Users/shiva/Desktop/mix docs/71oubr-iFOL._SX675_.jpg"' \
--form 'name="Shivang"' \
--form 'address="address"' \
--form 'contry="contry"' \
--form 'postalCode="postalCode"' \
--form 'city="city"' \
--form 'phone="phone"' \
--form 'phoneCode="phoneCode"' \
--form 'url="url"' \
--form 'contact="[]"' \
--form 'profile="profile"' \
--form 'fbLink="fbLink"' \
--form 'misson="misson"' \
--form 'team="[]"' \
--form 'productName="productName"' \
--form 'productdescription="productdescription"' \
--form 'productUrl="productUrl"'
```

2. List Orgnizations
```
curl --location 'http://localhost:3000/api/company?limit=10&search=Shivang&orderBy=name&sort=desc' \
--data ''

```
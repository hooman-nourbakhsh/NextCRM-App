# NextCRM

NextCRM is a dynamic and user-friendly Customer Relationship Management (CRM) application developed using **Next.js 13.1.1**. It allows efficient customer management with features such as adding, editing, deleting, and viewing customer details, as well as handling purchased product information. This project is powered by **MongoDB** for database management.

## Features

- **Add Customers:** Easily add new customers with details like name, email, phone, and purchased products.
- **Edit Customer Information:** Modify existing customer information seamlessly.
- **View Customer Details:** Access a detailed view of individual customers, including their purchases.
- **Delete Customers:** Remove customer records directly from the database.
- **Responsive Design:** Optimized for various screen sizes.

## Tech Stack

- **Framework:** Next.js 13.1.1
- **Database:** MongoDB with Mongoose ORM
- **Styling:** Custom CSS
- **State Management:** React `useState` and `useEffect`
- **Date Handling:** Moment.js
- **API Integration:** Dynamic API routes with server-side operations

## Demo

You can view the live demo of the project here:

[NextCRM Demo](https://next-crm-app.vercel.app/)

## Installation and Setup

Follow these steps to set up the project locally:

1. Clone the Repository:

   ```bash
   git clone https://github.com/matador7495/NextCRM-App.git
   cd NextCRM-App
   ```

2. Install Dependencies:
   ```bash
   npm install
   ```
3. Set Environment Variables:
   Create a `.env` file in the root directory and add the following:
   ```bash
   MONGO_URI=your_mongodb_connection_string
   ```
4. Run the Development Server:
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` to view the app in your browser.

## API Endpoints

- **POST** `/api/customer`: Create a new customer
- **GET** `/api/customer/[customerId]`: Fetch details of a specific customer
- **PATCH** `/api/edit/[customerId]`: Update details of a specific customer
- **DELETE** `/api/delete/[customerId]`: Delete a specific customer

## Key Functionalities

### Adding Customers

Users can add new customers via a structured form. Required fields include:

- Name
- Last Name
- Email

### Editing Customers

Existing customer details can be updated using the **Edit** button on the homepage or in the details view.

### Viewing Customer Details

Detailed information, including purchased products, is displayed on a dedicated page.

### Deleting Customers

Customers can be deleted directly from the list or their details page, with confirmation handled in real-time.

## License

This project is open-source and available under the [MIT License](./LICENSE).

## Acknowledgments

**I would like to thank the open-source community and contributors who provide the tools and libraries that make projects like this possible. Special thanks to the teams behind **Next.js**, **MongoDB**, **Moment.js**, and **Vercel** for their incredible work and support in making development faster and more efficient.**

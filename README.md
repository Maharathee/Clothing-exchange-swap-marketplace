# Clothing-exchange-swap-marketplace
A sustainable clothing exchange and swap marketplace developed as an internship project.
# ClothLoop — Clothing Exchange & Swap Marketplace

ClothLoop is a sustainable clothing exchange marketplace where users can list unused clothes, browse items, send swap requests, negotiate through chat, estimate fair swap values and discover location-based opportunities.

## Included
- React + Vite frontend
- Responsive marketplace UI
- Login/Register demo using localStorage
- Clothing listings with realistic sample data
- Search and filters
- Item detail page
- Swap request workflow: pending → accepted/rejected → completed
- Negotiation chat demo
- Rule-based swap value calculator
- User dashboard and listing creation
- Admin dashboard
- Express + MongoDB API starter for production integration
- Detailed project report PDF
- 7-slide evaluation PPT

## Pages
1. Home
2. Login
3. Register
4. Browse Listings
5. Item Details
6. Swap Requests
7. Chat
8. User Dashboard
9. Admin Panel
10. Value Calculator

## Demo Accounts
- User: amit@example.com
- Admin: admin@clothloop.demo
- Demo passwords are accepted by the front-end demo.

## Run the frontend
```bash
cd frontend
npm install
npm run dev
```
Open the URL shown by Vite, normally http://localhost:5173.

## Build for deployment
```bash
cd frontend
npm install
npm run build
```
The production output is generated in `frontend/dist`.

## Optional production backend
```bash
cd backend
npm install
copy .env.example .env
# Add your MongoDB Atlas URI and JWT secret
npm start
```

The included frontend is intentionally demo-ready with browser persistence so an evaluator can test the full UI without a database. The backend folder provides the production API foundation using Express, MongoDB, bcrypt and JWT.

## Deployment
For the simplest live demo:
- Deploy `frontend` to Vercel or Netlify.
- Set the build command to `npm run build`.
- Set the output directory to `dist`.
- For the API, deploy `backend` to Render/Railway and configure `MONGO_URI` and `JWT_SECRET`.

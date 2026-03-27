# Ayurveda Wellness Platform

A responsive React.js application for Ayurvedic therapy booking and wellness guidance with role-based authentication.

## Features

### 🏠 Landing/Home Page
- **Sticky Navbar** with logo, navigation links, and theme toggle
- **Hero Section** with Ayurveda-themed background and call-to-action buttons
- **Verified Centers** section with dynamic data fetching and hover effects
- **Benefits Section** highlighting Ayurvedic advantages
- **Responsive Footer** with contact info and social links

### 🔐 Authentication System
- **Role-based Login/Signup** (Admin, Practitioner, Patient)
- **Context API** for global auth state management
- **Protected Routes** with role-based access control
- **Automatic Redirection** based on user roles:
  - Admin → `/admin/dashboard`
  - Practitioner → `/practitioner/dashboard`
  - Patient → `/patient/booking`

### 📱 User Dashboards
- **Admin Dashboard**: Center management, practitioner oversight, statistics
- **Practitioner Dashboard**: Appointment scheduling, patient notes, treatment stats
- **Patient Dashboard**: Therapy booking, treatment history, personalized recommendations

### 🌿 Ritucharya Guidance
- **Seasonal Wellness Guide** with Ayurvedic recommendations
- **Dosha-based Lifestyle** tips for each season
- **Interactive Cards** with dietary and lifestyle suggestions

## Tech Stack

- **Frontend**: React.js 18
- **Styling**: Tailwind CSS with custom Ayurveda theme
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **State Management**: Context API
- **Icons**: Emoji-based for simplicity

## Website
<img width="800" height="441" alt="image" src="https://github.com/user-attachments/assets/64b3f36d-5075-4651-b088-b9d8e521eebf" />  
<img width="800" height="444" alt="image" src="https://github.com/user-attachments/assets/35dd00c6-46ae-4e5a-8ebf-ec1b255930b6" />


<img width="800" height="440" alt="image" src="https://github.com/user-attachments/assets/b0bce4fa-d497-4bd7-8651-2d9c2c6e2750" />

<img width="800" height="439" alt="image" src="https://github.com/user-attachments/assets/7da7f006-6b1c-4f22-afb5-f8ed3f228c23" />  
<img width="800" height="441" alt="image" src="https://github.com/user-attachments/assets/e783e692-ff00-427e-99d9-7ec15f14f22b" />

<img width="800" height="443" alt="image" src="https://github.com/user-attachments/assets/8cab8bfb-644c-43e6-bdd7-7a3bac861960" />  
<img width="800" height="437" alt="image" src="https://github.com/user-attachments/assets/0878f85d-2711-4e31-9fc4-837a2afbc77f" />

<img width="800" height="445" alt="image" src="https://github.com/user-attachments/assets/da2bb82f-ed4b-400e-9cd4-f9ae7a52e8c7" />  
<img width="800" height="444" alt="image" src="https://github.com/user-attachments/assets/eec02556-591f-4a1a-ae97-0f4716926291" />

<img width="800" height="441" alt="image" src="https://github.com/user-attachments/assets/c5594b4b-8895-41f5-91d6-7142070682ea" />  
<img width="800" height="439" alt="image" src="https://github.com/user-attachments/assets/fa06aaf7-f2ce-41dc-8705-b37246bd10ef" />

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ayurveda-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.js       # Navigation with auth state
│   ├── Footer.js       # Site footer
│   └── Loader.js       # Loading spinners
├── context/            # React Context providers
│   ├── AuthContext.js  # Authentication state
│   └── ThemeContext.js # Dark/Light theme
├── pages/              # Route components
│   ├── Home.js         # Landing page
│   ├── Login.js        # Authentication
│   ├── Signup.js       # User registration
│   ├── PatientBooking.js
│   ├── Ritucharya.js
│   ├── AdminDashboard.js
│   └── PractitionerDashboard.js
└── App.js              # Main app with routing
```

## Features in Detail

### 🎨 Design System
- **Custom Ayurveda Color Palette**
- **Dark/Light Mode Toggle**
- **Responsive Design** (Mobile-first approach)
- **Smooth Animations** with Framer Motion
- **Accessibility Compliant**

### 🔒 Security Features
- **Role-based Access Control**
- **Protected Route Guards**
- **Token-based Authentication** (ready for backend integration)
- **Form Validation** with error handling

### 📊 Mock Data Integration
- **Centers API Simulation** with loading states
- **User Authentication Mock** (easily replaceable with real API)
- **Dashboard Statistics** with realistic data

## Backend Integration Ready

The app is structured to easily integrate with your MongoDB backend:

1. **Replace mock API calls** in `AuthContext.js`
2. **Update center fetching** in `Home.js`
3. **Add real endpoints** for booking and dashboard data

### Example API Integration

```javascript
// In AuthContext.js
const login = async (email, password, role) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, role })
  });
  return response.json();
};
```

## Customization

### Theme Colors
Edit `tailwind.config.js` to customize the Ayurveda color palette:

```javascript
colors: {
  ayurveda: {
    primary: '#8B5A3C',    // Main brand color
    secondary: '#D4A574',  // Secondary actions
    accent: '#F4E4BC',     // Highlights
    dark: '#5D4037',       // Dark variant
    light: '#FFF8E1'       // Light backgrounds
  }
}
```

### Adding New Routes
1. Create component in `src/pages/`
2. Add route in `App.js`
3. Update navigation in `Navbar.js`

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify/Vercel
The app is ready for deployment to any static hosting service.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.

---

**Ready for MongoDB Integration!** 🚀

Provide your MongoDB connection string and API endpoints to complete the backend integration.

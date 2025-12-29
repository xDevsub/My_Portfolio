# 🚀 xDev Portfolio

A modern, responsive, and dynamic developer portfolio website built with React and Sanity.io. This project showcases skills, work experience, projects, resume, and contact information with a clean and professional design.

![Portfolio Preview](https://img.shields.io/badge/React-18.x-blue?logo=react)
![Sanity](https://img.shields.io/badge/Sanity.io-CMS-red?logo=sanity)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🎨 **Modern UI/UX**: Clean, professional design with smooth animations
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- 🎭 **Dynamic Content**: All content managed through Sanity CMS
- ⚡ **Fast Performance**: Optimized React application
- 🎬 **Smooth Animations**: Powered by Framer Motion
- 📧 **Contact Form**: Integrated email functionality
- 📄 **Resume Download**: Direct resume download feature
- 🔄 **Real-time Updates**: Content updates instantly from CMS
- 🌐 **Social Media Integration**: Dynamic social links from CMS
- 🎯 **Smart Navigation**: URL updates automatically as you scroll
- 🏠 **Logo Navigation**: Click logo to return to homepage
- 📱 **Mobile-First**: Touch-friendly mobile navigation

## 🛠️ Tech Stack

### Frontend (`frontend_react`)
- **React 18.x**: Modern React with Hooks
- **SCSS/Sass**: Advanced styling and maintainability
- **Framer Motion**: Smooth animations and page transitions
- **React Icons**: Comprehensive icon library
- **Sanity Client**: Real-time data fetching

### Backend / CMS (`backend_sanity`)
- **Sanity.io**: Headless CMS for content management
- **Sanity Studio**: Customizable content editor
- **Custom Schemas**: Abouts, Skills, Experiences, Works, Resume, Contact, Social Media

## 📂 Project Structure

```
portfolio_xdev/
├── backend_sanity/           # Sanity Studio & CMS
│   ├── schemas/
│   │   ├── abouts.js        # About section schema
│   │   ├── skills.js        # Skills schema
│   │   ├── experiences.js   # Experience schema
│   │   ├── works.js         # Projects/Works schema
│   │   ├── resume.js        # Resume schema
│   │   ├── contact.js       # Contact schema
│   │   └── index.js         # Schema aggregator
│   ├── sanity.config.js     # Sanity configuration
│   └── package.json
├── frontend_react/           # React Application
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   │   ├── Navbar/
│   │   │   ├── SocialMedia.jsx
│   │   │   └── NavigationDots.jsx
│   │   ├── container/       # Main page sections
│   │   │   ├── Header/
│   │   │   ├── About/
│   │   │   ├── Work/
│   │   │   ├── Skills/
│   │   │   └── Footer/
│   │   ├── wrapper/         # HOC wrappers
│   │   │   ├── AppWrap.js
│   │   │   └── MotionWrap.js
│   │   ├── assets/          # Images and static files
│   │   ├── constants/       # Constants and configs
│   │   ├── client.js        # Sanity client setup
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   ├── .env.example         # Environment variables template
│   └── package.json
├── .gitignore
└── README.md
```

## � Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Sanity.io account (free tier available)

### 1. Clone the Repository
```bash
git clone https://github.com/xDevsub/My_Portfolio.git
cd My_Portfolio
```

### 2. Backend Setup (Sanity CMS)

Navigate to the backend directory:
```bash
cd backend_sanity
```

Install dependencies:
```bash
npm install
```

Start Sanity Studio:
```bash
npm run dev
```
📍 Sanity Studio will be available at `http://localhost:3333`

### 3. Frontend Setup (React)

Open a new terminal and navigate to frontend:
```bash
cd frontend_react
```

Install dependencies:
```bash
npm install
```

### 4. Environment Configuration

Create a `.env` file in the `frontend_react` directory:
```bash
cp .env.example .env
```

Update the `.env` file with your Sanity credentials:
```env
REACT_APP_SANITY_PROJECT_ID=your_project_id_here
REACT_APP_SANITY_TOKEN=your_sanity_token_here
```

> **🔐 Important**: Never commit your `.env` file to GitHub. It's already in `.gitignore`.

**To get your Sanity credentials:**
1. Go to [sanity.io](https://www.sanity.io/)
2. Navigate to your project settings
3. Copy your Project ID
4. Generate an API token with Editor permissions

### 5. Start the Application

```bash
npm start
```
🌐 React app will be available at `http://localhost:3000`

## 🎯 Special Features

### Smart Navigation
- **Scroll-Based URLs**: URL automatically updates as you scroll through sections
- **Logo Click**: Click the logo to instantly return to homepage
- **Smooth Scrolling**: All navigation uses smooth scroll behavior

### Social Media Integration
- **Dynamic Icons**: Social media icons always visible on the left side
- **CMS Managed**: Links fetched from Sanity CMS
- **Platform Support**: Twitter, Facebook, Instagram (easily extensible)

### Modern Development
- **Fluid Typography**: Uses `clamp()` for responsive text sizing
- **CSS Custom Properties**: Consistent theming with CSS variables
- **Component Architecture**: Modular, reusable React components
3. **Real-time Updates**: Changes in Sanity will reflect immediately in your React app

## 🎯 Special Features

### Smart Navigation
- **Scroll-Based URLs**: URL automatically updates as you scroll through sections
- **Logo Click**: Click the logo to instantly return to homepage
- **Smooth Scrolling**: All navigation uses smooth scroll behavior

### Social Media Integration
- **Dynamic Icons**: Social media icons always visible on the left side
- **CMS Managed**: Links fetched from Sanity CMS
- **Platform Support**: Twitter, Facebook, Instagram (easily extensible)

### Modern Development
- **Fluid Typography**: Uses `clamp()` for responsive text sizing
- **CSS Custom Properties**: Consistent theming with CSS variables
- **Component Architecture**: Modular, reusable React components

## 🎨 Customization

### Update Styles
- Global styles: `frontend_react/src/App.scss`
- Component styles: Individual `.scss` files in component folders

### Modify Sections
- Edit components in `frontend_react/src/container/`
- Update schemas in `backend_sanity/schemas/`

### Add New Sections
1. Create new schema in `backend_sanity/schemas/`
2. Add schema to `schemas/index.js`
3. Create corresponding React component
4. Fetch data using Sanity client

## 🚢 Deployment

### Deploy Sanity Studio
```bash
cd backend_sanity
npm run build
sanity deploy
```

### Deploy React App
You can deploy the React app to:
- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **GitHub Pages**: Configure in `package.json`

## 📦 Available Scripts

### Frontend
- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

### Backend
- `npm run dev` - Start Sanity Studio
- `npm run build` - Build Sanity Studio
- `sanity deploy` - Deploy studio to Sanity

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - feel free to use it for your own portfolio!

## 👨‍💻 Author

**xDev**
- GitHub: [@xDevsub](https://github.com/xDevsub)
- Portfolio: [My_Portfolio](https://github.com/xDevsub/My_Portfolio)

## 🙏 Acknowledgments

- Sanity.io for the amazing CMS
- Framer Motion for smooth animations
- React community for excellent documentation

---

⭐ Star this repo if you find it helpful!

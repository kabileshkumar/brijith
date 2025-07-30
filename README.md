# Modern Portfolio Website

A modern, responsive portfolio website built with React, Vite, TailwindCSS, and other cutting-edge frontend technologies.

## Features

- Dark/Light mode with theme toggle
- Interactive particle background
- Responsive design for all devices
- Smooth animations and transitions
- Client-side only (no server required)
- Ready for Vercel deployment

## Local Development

To run the project locally:

```bash
# Navigate to the client directory
cd client

# Run the portfolio locally
./run-portfolio.sh
```

Alternatively, you can run the following commands manually:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Building for Production

To build the project for production:

```bash
# Navigate to the client directory
cd client

# Build the project
npm run build
```

The build output will be in the `dist` directory.

## Deployment to Vercel

This portfolio is optimized for deployment on Vercel. To deploy:

### Option 1: Using the script

```bash
# Navigate to the client directory
cd client

# Run the deployment script
./build-for-vercel.sh

# Then deploy using Vercel CLI
vercel
```

### Option 2: Direct deployment from GitHub

1. Push this project to your GitHub repository
2. Log in to your Vercel account
3. Create a new project and import from your GitHub repository
4. Set the root directory to `/client`
5. Deploy!

## Customization

To customize the portfolio for your needs:

1. Update the personal information and projects in the components
2. Replace the images in the `public/assets` directory
3. Adjust the color scheme in `index.css`
4. Add your own content to the pages

## Technologies Used

- React
- TypeScript
- Vite
- TailwindCSS
- Framer Motion
- Wouter (for routing)
- Zod (for form validation)
- React Hook Form

## License

MIT
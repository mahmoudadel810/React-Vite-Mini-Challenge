# Interactive Hero Section

A modern, interactive hero section built with React, TypeScript, and Tailwind CSS. This project demonstrates a beautiful, responsive hero section with inline editing capabilities and AI-like content regeneration.

## 🚀 Features

- **Editable Content**
  - Click-to-edit headlines and subheadlines
  - Real-time text updates
  - Visual editing indicators
  - Keyboard support (Enter to save, Escape to cancel)

- **AI Regeneration**
  - Simulated AI content generation
  - Random text and image updates
  - Loading state animations
  - Smooth transitions

- **Modern Design**
  - Beautiful gradient backgrounds
  - Responsive layout
  - Smooth animations
  - High-quality images
  - Clean typography

- **Interactive Elements**
  - Call-to-Action button
  - Editable text fields
  - Regenerate button
  - Hover effects

## 🛠️ Tech Stack

- **Frontend**
  - React 18
  - TypeScript
  - Tailwind CSS
  - Vite

- **Development Tools**
  - ESLint
  - Prettier
  - TypeScript
  - PostCSS

- **Future Backend Integration (Planned)**
  - Node.js/Express.js server
  - MongoDB/PostgreSQL database
  - User authentication
  - Content persistence
  - Real AI integration for content generation

## 📦 Installation

1. Clone the repository:
```bash
git clone [https://github.com/mahmoudadel810/MiniChallenge-React-Vite.git]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure 🏗️ 

```
src/
├── components/
│   ├── hero/
│   │   ├── HeroSection.tsx      # Main hero component
│   │   ├── EditableText.tsx     # Editable text component
│   │   ├── HeroImage.tsx        # Image component
│   │   ├── CallToAction.tsx     # CTA button
│   │   └── AIRegenerateButton.tsx # AI regeneration button
│   └── ui/                      # Reusable UI components
├── utils/
│   ├── cn.ts                    # Class name utility
│   └── dummyContent.ts          # Sample content data
```

## Component Details 🎨 

### HeroSection
The main component that orchestrates the hero section layout and functionality.

### EditableText
A reusable component that enables inline text editing with:
- Click-to-edit functionality
- Keyboard support
- Visual feedback
- Custom styling

### HeroImage
Handles image display with:
- Smooth transitions
- Loading states
- Responsive sizing
- Gradient overlays

### CallToAction
A customizable CTA button with:
- Gradient styling
- Hover effects
- Icon support
- Responsive design

### AIRegenerateButton
Simulates AI content generation with:
- Loading states
- Visual feedback
- Smooth transitions
- Icon animations

## Usage 🎯 

1. **Editing Text**
   - Click on any editable text to modify
   - Press Enter to save changes
   - Press Escape to cancel

2. **Regenerating Content**
   - Click the "Regenerate with AI" button
   - Wait for the loading animation
   - View the new content

3. **Customization**
   - Modify colors in `tailwind.config.js`
   - Update content in `dummyContent.ts`
   - Adjust animations in component files

## Future Plans 🚀

- **Backend Integration**
  - Implement a Node.js/Express.js server
  - Add database support for content persistence
  - Integrate real AI services for content generation
  - Add user authentication and authorization
  - Enable content versioning and history

- **Enhanced Features**
  - Real-time collaboration
  - Content templates
  - Analytics dashboard
  - Export/Import functionality
  - Custom theme support

## Development 🧪 

### Adding New Features
1. Create new components in the appropriate directory
2. Update types in TypeScript files
3. Add new styles in Tailwind classes
4. Test responsiveness across devices

### Styling Guidelines
- Use Tailwind CSS classes
- Follow mobile-first approach
- Maintain consistent spacing
- Use semantic HTML

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Images from Pexels
- Icons from Lucide

##  Contributing 🤝

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## Support 📞 

For support, please open an issue in the repository or contact me over Linked IN  posted in my Profile or Click here [https://www.linkedin.com/in/mahmoud-adel--/]


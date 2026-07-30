const fs = require('fs');
const files = [
  'src/components/home/HomeSections/HomeSections.tsx',
  'src/components/home/Services/Services.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Add Reveal import
  if (!content.includes('import { Reveal }')) {
    content = content.replace(
      /import \{ motion(.*?) \} from 'framer-motion';/,
      "import { motion$1 } from 'framer-motion';\nimport { Reveal } from '@/components/ui/Reveal/Reveal';"
    );
  }
  
  // Replace opening tags
  content = content.replace(/<motion\.([a-zA-Z0-9]+)/g, '<Reveal as="$1"');
  // Replace closing tags
  content = content.replace(/<\/motion\.([a-zA-Z0-9]+)>/g, '</Reveal>');
  
  fs.writeFileSync(file, content);
  console.log('Updated ' + file);
});

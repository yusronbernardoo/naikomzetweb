const fs = require('fs');

function scaleDown(file) {
  if (!fs.existsSync(file)) {
    console.log(`File not found: ${file}`);
    return;
  }
  
  let content = fs.readFileSync(file, 'utf8');
  
  // Section paddings
  content = content.replace(/clamp\(4rem,\s*8vw,\s*8rem\)/g, "clamp(3rem, 5vw, 5rem)");
  content = content.replace(/clamp\(3\.5rem,\s*6vw,\s*5\.5rem\)/g, "clamp(2.5rem, 4vw, 4.5rem)");
  content = content.replace(/clamp\(3rem,\s*6vw,\s*5rem\)/g, "clamp(2rem, 4vw, 4rem)");
  content = content.replace(/clamp\(2rem,\s*5vw,\s*4rem\)/g, "clamp(1.5rem, 3vw, 3rem)");
  content = content.replace(/clamp\(6rem,\s*10vw,\s*8rem\)/g, "clamp(4rem, 6vw, 6rem)");
  
  // Font sizes
  content = content.replace(/clamp\(2\.5rem,\s*6vw,\s*4rem\)/g, "clamp(2rem, 4vw, 3rem)");
  content = content.replace(/clamp\(2\.5rem,\s*4vw,\s*3\.25rem\)/g, "clamp(1.75rem, 3vw, 2.5rem)");
  content = content.replace(/clamp\(1\.5rem,\s*2\.5vw,\s*2\.25rem\)/g, "clamp(1.5rem, 2vw, 1.875rem)");
  
  // Gaps
  content = content.replace(/clamp\(3rem,\s*6vw,\s*5rem\)/g, "clamp(2rem, 4vw, 3rem)");
  content = content.replace(/clamp\(3rem,\s*5vw,\s*5rem\)/g, "clamp(2rem, 3vw, 3.5rem)");
  content = content.replace(/clamp\(2rem,\s*5vw,\s*4rem\)/g, "clamp(1.5rem, 3vw, 2.5rem)");
  
  fs.writeFileSync(file, content);
  console.log(`Scaled down ${file}`);
}

scaleDown('src/components/home/HomeSections/HomeSections.module.css');
scaleDown('src/components/home/Services/Services.module.css');
scaleDown('src/components/home/Hero/Hero.module.css');

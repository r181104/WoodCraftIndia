// Premium SVG Product Images for Artisan Woods

export const productImages = {
  teakDiningTable: `data:image/svg+xml;base64,${btoa(`
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="woodGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#A0522D;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#8B4513;stop-opacity:1" />
        </linearGradient>
        <pattern id="woodGrain1" patternUnits="userSpaceOnUse" width="100" height="20">
          <rect width="100" height="20" fill="#8B4513"/>
          <path d="M0,5 Q25,2 50,5 T100,5" stroke="#654321" stroke-width="1" fill="none"/>
          <path d="M0,12 Q30,10 60,12 T100,12" stroke="#654321" stroke-width="0.5" fill="none"/>
        </pattern>
      </defs>
      
      <!-- Background -->
      <rect width="400" height="300" fill="#f8f7f4"/>
      
      <!-- Table Top Shadow -->
      <ellipse cx="200" cy="280" rx="150" ry="15" fill="rgba(0,0,0,0.1)"/>
      
      <!-- Table Top -->
      <rect x="50" y="100" width="300" height="120" rx="8" fill="url(#woodGrad1)" stroke="#654321" stroke-width="2"/>
      <rect x="52" y="102" width="296" height="116" rx="6" fill="url(#woodGrain1)" opacity="0.7"/>
      
      <!-- Table Legs -->
      <rect x="70" y="220" width="15" height="45" fill="#654321" rx="3"/>
      <rect x="315" y="220" width="15" height="45" fill="#654321" rx="3"/>
      <rect x="70" y="225" width="260" height="8" fill="#8B4513" rx="2"/>
      
      <!-- Decorative Elements -->
      <rect x="75" y="120" width="250" height="4" fill="#654321" rx="2"/>
      <rect x="75" y="190" width="250" height="4" fill="#654321" rx="2"/>
      
      <!-- Highlight -->
      <rect x="55" y="105" width="290" height="20" fill="rgba(255,255,255,0.2)" rx="4"/>
    </svg>
  `)}`,

  rosewoodChair: `data:image/svg+xml;base64,${btoa(`
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rosewoodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#722F37;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#8B4A47;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#722F37;stop-opacity:1" />
        </linearGradient>
        <pattern id="rosewoodGrain" patternUnits="userSpaceOnUse" width="80" height="15">
          <rect width="80" height="15" fill="#722F37"/>
          <path d="M0,3 Q20,1 40,3 T80,3" stroke="#5D252A" stroke-width="0.8" fill="none"/>
          <path d="M0,8 Q25,6 50,8 T80,8" stroke="#5D252A" stroke-width="0.5" fill="none"/>
        </pattern>
      </defs>
      
      <!-- Background -->
      <rect width="400" height="300" fill="#f8f7f4"/>
      
      <!-- Chair Shadow -->
      <ellipse cx="200" cy="285" rx="100" ry="10" fill="rgba(0,0,0,0.1)"/>
      
      <!-- Chair Back -->
      <rect x="150" y="60" width="100" height="140" rx="12" fill="url(#rosewoodGrad)" stroke="#5D252A" stroke-width="2"/>
      <rect x="152" y="62" width="96" height="136" rx="10" fill="url(#rosewoodGrain)" opacity="0.6"/>
      
      <!-- Chair Seat -->
      <rect x="130" y="180" width="140" height="60" rx="8" fill="url(#rosewoodGrad)" stroke="#5D252A" stroke-width="2"/>
      <rect x="132" y="182" width="136" height="56" rx="6" fill="url(#rosewoodGrain)" opacity="0.6"/>
      
      <!-- Chair Legs -->
      <rect x="140" y="240" width="12" height="40" fill="#5D252A" rx="2"/>
      <rect x="170" y="240" width="12" height="40" fill="#5D252A" rx="2"/>
      <rect x="218" y="240" width="12" height="40" fill="#5D252A" rx="2"/>
      <rect x="248" y="240" width="12" height="40" fill="#5D252A" rx="2"/>
      
      <!-- Decorative Carving -->
      <circle cx="200" cy="130" r="15" fill="rgba(255,255,255,0.1)" stroke="#8B4A47" stroke-width="1"/>
      <path d="M190,130 Q200,120 210,130 Q200,140 190,130" fill="#8B4A47"/>
      
      <!-- Armrests -->
      <rect x="115" y="160" width="40" height="12" rx="6" fill="url(#rosewoodGrad)"/>
      <rect x="245" y="160" width="40" height="12" rx="6" fill="url(#rosewoodGrad)"/>
    </svg>
  `)}`,

  sheeshamWardrobe: `data:image/svg+xml;base64,${btoa(`
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sheeshamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#8B4A3C;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#A0522D;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#8B4A3C;stop-opacity:1" />
        </linearGradient>
        <pattern id="sheeshamGrain" patternUnits="userSpaceOnUse" width="120" height="25">
          <rect width="120" height="25" fill="#8B4A3C"/>
          <path d="M0,5 Q30,2 60,5 T120,5" stroke="#654132" stroke-width="1" fill="none"/>
          <path d="M0,15 Q40,12 80,15 T120,15" stroke="#654132" stroke-width="0.8" fill="none"/>
        </pattern>
      </defs>
      
      <!-- Background -->
      <rect width="400" height="300" fill="#f8f7f4"/>
      
      <!-- Wardrobe Shadow -->
      <rect x="85" y="285" width="230" height="10" rx="5" fill="rgba(0,0,0,0.1)"/>
      
      <!-- Wardrobe Frame -->
      <rect x="80" y="50" width="240" height="230" rx="8" fill="url(#sheeshamGrad)" stroke="#654132" stroke-width="3"/>
      <rect x="83" y="53" width="234" height="224" rx="6" fill="url(#sheeshamGrain)" opacity="0.7"/>
      
      <!-- Left Door -->
      <rect x="90" y="65" width="110" height="180" rx="4" fill="url(#sheeshamGrad)" stroke="#654132" stroke-width="2"/>
      <rect x="92" y="67" width="106" height="176" rx="3" fill="url(#sheeshamGrain)" opacity="0.5"/>
      
      <!-- Right Door -->
      <rect x="205" y="65" width="110" height="180" rx="4" fill="url(#sheeshamGrad)" stroke="#654132" stroke-width="2"/>
      <rect x="207" y="67" width="106" height="176" rx="3" fill="url(#sheeshamGrain)" opacity="0.5"/>
      
      <!-- Door Handles -->
      <circle cx="185" cy="155" r="4" fill="#8B7355" stroke="#654132" stroke-width="1"/>
      <circle cx="220" cy="155" r="4" fill="#8B7355" stroke="#654132" stroke-width="1"/>
      
      <!-- Decorative Panels -->
      <rect x="105" y="85" width="80" height="60" rx="4" fill="rgba(255,255,255,0.1)" stroke="#8B4A3C" stroke-width="1"/>
      <rect x="220" y="85" width="80" height="60" rx="4" fill="rgba(255,255,255,0.1)" stroke="#8B4A3C" stroke-width="1"/>
      
      <!-- Base -->
      <rect x="75" y="270" width="250" height="12" rx="4" fill="#654132"/>
    </svg>
  `)}`,

  mangoBookshelf: `data:image/svg+xml;base64,${btoa(`
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mangoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#CD853F;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#DEB887;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#CD853F;stop-opacity:1" />
        </linearGradient>
        <pattern id="mangoGrain" patternUnits="userSpaceOnUse" width="90" height="18">
          <rect width="90" height="18" fill="#CD853F"/>
          <path d="M0,4 Q22,2 45,4 T90,4" stroke="#B8860B" stroke-width="0.8" fill="none"/>
          <path d="M0,10 Q28,8 56,10 T90,10" stroke="#B8860B" stroke-width="0.6" fill="none"/>
        </pattern>
      </defs>
      
      <!-- Background -->
      <rect width="400" height="300" fill="#f8f7f4"/>
      
      <!-- Bookshelf Shadow -->
      <rect x="85" y="285" width="230" height="10" rx="5" fill="rgba(0,0,0,0.1)"/>
      
      <!-- Bookshelf Frame -->
      <rect x="80" y="40" width="240" height="240" rx="6" fill="url(#mangoGrad)" stroke="#B8860B" stroke-width="2"/>
      <rect x="82" y="42" width="236" height="236" rx="5" fill="url(#mangoGrain)" opacity="0.6"/>
      
      <!-- Shelves -->
      <rect x="90" y="90" width="220" height="8" fill="#B8860B" rx="2"/>
      <rect x="90" y="140" width="220" height="8" fill="#B8860B" rx="2"/>
      <rect x="90" y="190" width="220" height="8" fill="#B8860B" rx="2"/>
      <rect x="90" y="240" width="220" height="8" fill="#B8860B" rx="2"/>
      
      <!-- Books -->
      <rect x="100" y="50" width="12" height="35" fill="#8B0000" rx="1"/>
      <rect x="115" y="50" width="15" height="35" fill="#006400" rx="1"/>
      <rect x="133" y="50" width="10" height="35" fill="#4B0082" rx="1"/>
      <rect x="146" y="50" width="18" height="35" fill="#8B4513" rx="1"/>
      
      <rect x="100" y="100" width="14" height="35" fill="#FF4500" rx="1"/>
      <rect x="117" y="100" width="11" height="35" fill="#2F4F4F" rx="1"/>
      <rect x="131" y="100" width="16" height="35" fill="#8B008B" rx="1"/>
      
      <rect x="100" y="150" width="13" height="35" fill="#FF6347" rx="1"/>
      <rect x="116" y="150" width="17" height="35" fill="#4682B4" rx="1"/>
      <rect x="136" y="150" width="12" height="35" fill="#228B22" rx="1"/>
      
      <!-- Decorative Corner -->
      <path d="M300,60 Q310,50 320,60 L320,80 Q310,70 300,80 Z" fill="rgba(255,255,255,0.2)"/>
    </svg>
  `)}`,

  oakCoffeeTable: `data:image/svg+xml;base64,${btoa(`
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="oakGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#D2B48C;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#F5DEB3;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#D2B48C;stop-opacity:1" />
        </linearGradient>
        <pattern id="oakGrain" patternUnits="userSpaceOnUse" width="100" height="20">
          <rect width="100" height="20" fill="#D2B48C"/>
          <path d="M0,5 Q25,3 50,5 T100,5" stroke="#CD853F" stroke-width="1" fill="none"/>
          <path d="M0,12 Q30,10 60,12 T100,12" stroke="#CD853F" stroke-width="0.7" fill="none"/>
        </pattern>
      </defs>
      
      <!-- Background -->
      <rect width="400" height="300" fill="#f8f7f4"/>
      
      <!-- Table Shadow -->
      <ellipse cx="200" cy="285" rx="140" ry="12" fill="rgba(0,0,0,0.1)"/>
      
      <!-- Coffee Table Top -->
      <rect x="70" y="140" width="260" height="80" rx="12" fill="url(#oakGrad)" stroke="#CD853F" stroke-width="2"/>
      <rect x="72" y="142" width="256" height="76" rx="10" fill="url(#oakGrain)" opacity="0.7"/>
      
      <!-- Table Legs -->
      <rect x="90" y="220" width="20" height="50" fill="#CD853F" rx="4"/>
      <rect x="290" y="220" width="20" height="50" fill="#CD853F" rx="4"/>
      
      <!-- Lower Shelf -->
      <rect x="100" y="245" width="200" height="12" fill="url(#oakGrad)" rx="3"/>
      
      <!-- Decorative Edge -->
      <rect x="75" y="145" width="250" height="6" fill="rgba(255,255,255,0.2)" rx="3"/>
      <rect x="75" y="208" width="250" height="6" fill="#CD853F" rx="3"/>
      
      <!-- Center Ornament -->
      <circle cx="200" cy="180" r="8" fill="rgba(255,255,255,0.15)" stroke="#CD853F" stroke-width="1"/>
    </svg>
  `)}`,

  walnutSideTable: `data:image/svg+xml;base64,${btoa(`
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="walnutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#A0522D;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#8B4513;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Background -->
      <rect width="400" height="300" fill="#f8f7f4"/>
      
      <!-- Table Shadow -->
      <ellipse cx="200" cy="285" rx="80" ry="8" fill="rgba(0,0,0,0.1)"/>
      
      <!-- Side Table Top -->
      <rect x="150" y="120" width="100" height="70" rx="8" fill="url(#walnutGrad)" stroke="#654321" stroke-width="2"/>
      
      <!-- Table Legs -->
      <rect x="160" y="190" width="12" height="80" fill="#654321" rx="2"/>
      <rect x="228" y="190" width="12" height="80" fill="#654321" rx="2"/>
      
      <!-- Drawer -->
      <rect x="155" y="140" width="90" height="25" rx="3" fill="#A0522D" stroke="#654321" stroke-width="1"/>
      <circle cx="200" cy="152" r="3" fill="#654321"/>
      
      <!-- Highlight -->
      <rect x="152" y="123" width="96" height="8" fill="rgba(255,255,255,0.2)" rx="4"/>
    </svg>
  `)}`,

  bambooScreen: `data:image/svg+xml;base64,${btoa(`
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bambooGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#9ACD32;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#8FBC8F;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#6B8E23;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Background -->
      <rect width="400" height="300" fill="#f8f7f4"/>
      
      <!-- Screen Shadow -->
      <rect x="55" y="285" width="290" height="8" rx="4" fill="rgba(0,0,0,0.1)"/>
      
      <!-- Bamboo Poles -->
      <rect x="60" y="40" width="8" height="240" fill="url(#bambooGrad)" rx="4"/>
      <rect x="80" y="40" width="8" height="240" fill="url(#bambooGrad)" rx="4"/>
      <rect x="100" y="40" width="8" height="240" fill="url(#bambooGrad)" rx="4"/>
      <rect x="120" y="40" width="8" height="240" fill="url(#bambooGrad)" rx="4"/>
      <rect x="140" y="40" width="8" height="240" fill="url(#bambooGrad)" rx="4"/>
      <rect x="160" y="40" width="8" height="240" fill="url(#bambooGrad)" rx="4"/>
      <rect x="180" y="40" width="8" height="240" fill="url(#bambooGrad)" rx="4"/>
      <rect x="200" y="40" width="8" height="240" fill="url(#bambooGrad)" rx="4"/>
      <rect x="220" y="40" width="8" height="240" fill="url(#bambooGrad)" rx="4"/>
      <rect x="240" y="40" width="8" height="240" fill="url(#bambooGrad)" rx="4"/>
      <rect x="260" y="40" width="8" height="240" fill="url(#bambooGrad)" rx="4"/>
      <rect x="280" y="40" width="8" height="240" fill="url(#bambooGrad)" rx="4"/>
      <rect x="300" y="40" width="8" height="240" fill="url(#bambooGrad)" rx="4"/>
      <rect x="320" y="40" width="8" height="240" fill="url(#bambooGrad)" rx="4"/>
      <rect x="340" y="40" width="8" height="240" fill="url(#bambooGrad)" rx="4"/>
      
      <!-- Horizontal Supports -->
      <rect x="50" y="80" width="300" height="4" fill="#6B8E23" rx="2"/>
      <rect x="50" y="140" width="300" height="4" fill="#6B8E23" rx="2"/>
      <rect x="50" y="200" width="300" height="4" fill="#6B8E23" rx="2"/>
      
      <!-- Bamboo Joints -->
      <circle cx="64" r="6" cy="120" fill="#556B2F"/>
      <circle cx="84" r="6" cy="160" fill="#556B2F"/>
      <circle cx="104" r="6" cy="100" fill="#556B2F"/>
    </svg>
  `)}`,

  cedarChest: `data:image/svg+xml;base64,${btoa(`
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cedarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#CD853F;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#8B4513;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Background -->
      <rect width="400" height="300" fill="#f8f7f4"/>
      
      <!-- Chest Shadow -->
      <ellipse cx="200" cy="285" rx="120" ry="10" fill="rgba(0,0,0,0.1)"/>
      
      <!-- Chest Body -->
      <rect x="80" y="160" width="240" height="100" rx="8" fill="url(#cedarGrad)" stroke="#654321" stroke-width="2"/>
      
      <!-- Chest Lid -->
      <path d="M75 160 Q200 140 325 160 L320 155 Q200 135 80 155 Z" fill="url(#cedarGrad)" stroke="#654321" stroke-width="2"/>
      
      <!-- Hardware -->
      <rect x="110" y="180" width="20" height="8" fill="#8B7355" rx="2"/>
      <rect x="270" y="180" width="20" height="8" fill="#8B7355" rx="2"/>
      <rect x="190" y="145" width="20" height="6" fill="#8B7355" rx="1"/>
      
      <!-- Decorative Panel -->
      <rect x="120" y="190" width="160" height="40" rx="4" fill="rgba(255,255,255,0.1)" stroke="#8B4513" stroke-width="1"/>
      
      <!-- Legs -->
      <rect x="90" y="255" width="15" height="20" fill="#654321" rx="3"/>
      <rect x="295" y="255" width="15" height="20" fill="#654321" rx="3"/>
    </svg>
  `)}`,
};
import './App.css';
import React, { useEffect, useState } from 'react';
import './index.css';



function BlogPage() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
    // Trigger the animation by adding the "appear" class
    setIsVisible(true);
    }, []); // Empty dependency array ensures this runs only once on component mount
    return (
  <body>
    <div className="blog-page">
      <h1 style={{ color: 'white', textShadow: '2px 2px 4px black' }}>The Future in Your Hands: Galaxy Z Fold 4 Review and Impressions</h1>
      <p style={{ color: 'white', textShadow: '2px 2px 4px black' }}> Author: Don Miller  Date: September 9, 2023</p>
      <div className={`blog-content ${isVisible ? 'appear' : ''}`}>
         <div className="image-container">
          < img className="blog-image rotate-on-hover" src ="/Zfold.jpg" alt=""/>
          {/* Add more content here */}
          </div>
        <p>
         As a owner of the Galaxy Z Fold 4, I can't help but marvel at its impressive qualities.
         The foldable display has transformed the way I use my smartphone.
         Multitasking is a breeze, and it's become my go-to device for both work and entertainment.
         The performance is stellar, ensuring that all my apps run smoothly.
         Plus, the camera system captures beautiful photos and videos. 
         Its sleek design is an attention-grabber, and the battery life keeps me going all day. 
         However, it's important to note that the premium price tag was a significant investment, and the device is a bit heavier and bulkier than my previous phone.
         I'm cautious about its fragility, so I use it with care. Some apps aren't fully optimized, which can be a minor inconvenience, but the learning curve has been worth it for the unique foldable experience.
         Overall, my Galaxy Z Fold 4 has become an integral part of my tech life, offering a glimpse into the future of smartphones.
        </p>
        <div className="heading2">
          <h2 className="typewriter" style={{ color: 'white', textShadow: '2px 2px 4px black' }}>Key Features of The Zfold 4</h2>
        </div>
        <div className="list-container">
          <ul>
            <li>6.2-inch outer display and a slimmer hinge </li>
            <li>50-megapixel primary camera, 12-megapixel ultra-wide camera and 10-megapixel telephoto camera on the back</li>
            <li>4-megapixel under-display inner selfie camera and a 10-megapixel cover screen selfie camera</li>
            <li>Sub-6GHz and mmWave 5G connectivity, Wi-Fi 6E, Bluetooth v5.2, NFC, and a USB-C port</li>
            <li>An ultra-wideband chip for spatial awareness</li>
          </ul>
            <div>
            <h2 className="typewriter" style={{ color: 'white', textShadow: '2px 2px 4px black' }}>Conclusion</h2>
          </div>
          <div>
            <p>In conclusion, the Zfold 4 stands out as a remarkable piece of technology that seamlessly blends innovation and functionality.
            With its cutting-edge features and sleek design, it's clear that this device is a game-changer in the world of technology. 
            Whether you're a professional looking for enhanced productivity or a tech enthusiast seeking the latest advancements, the Zfold 4 delivers on all fronts.
            Its impressive folding display, robust performance, and versatile capabilities make it a standout choice. 
            As we move forward in the era of folding smartphones, the Zfold 4 proves itself as a leading contender, promising a future filled with endless possibilities and exciting experiences for tech enthusiasts and users alike.</p>
          </div>
        </div>
      </div>
    </div>
  </body>
 );
}

export default BlogPage;


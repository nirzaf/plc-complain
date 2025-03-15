import React from 'react';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="complaint-container">
      <div className="complaint-header">
        <div className="logo-container">
          <img 
            src="https://ik.imagekit.io/mhvgbp9xk/land-images/sri-lanka-police-logo-920BA57BE5-seeklogo.com.png?updatedAt=1742002983464" 
            alt="Sri Lanka Police Logo" 
            className="police-logo"
          />
        </div>
        <h1>Police Complaint Report</h1>
      </div>
      
      <div className="complaint-content">
        <h2>Subject: Unauthorized Demolition of Common Path and Road Widening Encroaching on Land Described in Deed of Transfer No. 14999</h2>
        
        <div className="section">
          <h3>Complaint Details:</h3>
          
          <p>
            I, <strong>M.F.M. Fazrin</strong>, residing at <strong>412, Bulugohotenne, K, Batugoda, Kandy. 20850</strong>, 
            wish to file a formal complaint against my neighbor(s) residing adjacent to my property for unauthorized demolition 
            and alteration of a common access path shared between our properties. This property is legally described in 
            <strong> Deed of Transfer No. 14999</strong>, registered at the <strong>Kandy Land Registry</strong>, a duplicate 
            of which was tendered on <strong>25 JUL 2024</strong>. The neighbors have been actively demolishing and altering 
            the access path without obtaining prior consent or permission from me or any other relevant parties involved, 
            including the owners of other properties who share the same right of way.
          </p>
          
          <p>
            The situation is causing considerable inconvenience and disruption to access and is encroaching on my rightful 
            portion of the land and the shared access easement. Specifically, my neighbors have engaged in flattening the 
            road to widen their land, which faces the <strong>A9 road</strong>. This change was made without any legal or 
            mutual agreement, and it impacts the original boundaries of the shared access path and potentially my registered 
            property boundaries.
          </p>
          
          <p>
            According to the aforementioned <strong>Deed of Transfer No. 14999</strong>, my property, described as 
            <strong> Lot No. 1</strong> depicted in <strong>Plan No. 5208 dated 18th July 2024</strong>, made by 
            <strong> DMAC Dissnayake, Licensed Surveyor</strong>, includes a right of way and other similar rights to use 
            in common with other owners over and along a <strong>10-foot wide access marked as Lot 2</strong> in 
            <strong> Plan No. 654</strong>, made by <strong>D. M. Jayarathne, Licensed Surveyor</strong>. This access path 
            is being damaged and altered. I believe they are widening their area in <strong>Lot No. 2</strong> on said 
            <strong> Plan No. 654</strong>, which interferes with the common right of way as laid out in our deeds.
          </p>
        </div>
        
        <div className="section">
          <h3>Evidence:</h3>
          
          <p>
            To provide a clear understanding of the damage and alteration caused, I am submitting the following evidence:
          </p>
          
          <div className="evidence-container">
            <div className="evidence-item">
              <h4>Image: Before Demolition</h4>
              <img 
                src="https://ik.imagekit.io/mhvgbp9xk/land-images/before-demolition-image.jpeg?updatedAt=1742002669126" 
                alt="Before Demolition" 
                className="evidence-image"
              />
              <p className="caption">Shows the original condition of the access path before the demolition and widening activity.</p>
            </div>
            
            <div className="evidence-item">
              <h4>Image: After Demolition</h4>
              <img 
                src="https://ik.imagekit.io/mhvgbp9xk/land-images/after-demolition.jpeg?updatedAt=1742002625396" 
                alt="After Demolition" 
                className="evidence-image"
              />
              <p className="caption">Shows the current state of the access path after the unauthorized work was carried out.</p>
            </div>
            
            <div className="evidence-item">
              <h4>Video: After Demolition</h4>
              <video controls className="evidence-video">
                <source 
                  src="https://ik.imagekit.io/mhvgbp9xk/land-images/after-demolition-video.mp4?updatedAt=1742002789634" 
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <p className="caption">Video evidence showing the state of the property after demolition.</p>
            </div>
          </div>
        </div>
        
        <div className="section">
          <h3>Request for Action:</h3>
          
          <p>
            These changes are not only damaging the shared access path but are also illegally altering the land's physical 
            structure. I believe that if not addressed, this will lead to further legal complications. I request an immediate 
            investigation into the matter and appropriate action to:
          </p>
          
          <ol>
            <li><strong>Halt all further demolition and alteration work.</strong></li>
            <li><strong>Restore the shared access path to its original condition and width</strong>, as described in 
              <strong> Deed of Transfer No. 14999</strong> and the referenced plans.</li>
            <li><strong>Ensure that all necessary permissions and approvals are obtained</strong> before any further work 
              impacting the access path or registered property boundaries is undertaken.</li>
            <li><strong>Ensure that the neighbors are acting within the boundaries of the land they own.</strong></li>
          </ol>
          
          <p>
            I kindly request that this complaint be taken seriously and the appropriate action be taken to ensure that no 
            further damage occurs, and my property rights, including the right to use the shared access path as documented 
            in my <strong>Deed</strong>, are respected.
          </p>
        </div>
        
        <div className="section signature">
          <p>Thank you for your attention to this matter.</p>
          
          <p><strong>Sincerely,</strong><br />
          <strong>M.F.M. Fazrin</strong><br />
          <strong>412, Bulugohotenne, K, Batugoda, Kandy. 20850</strong><br />
          <strong>Email: mfmfazrin1986@gmail.com</strong><br />
          <strong>Mobile: +94772049123</strong><br />
          <strong>ID Number: 862720423V</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Home;

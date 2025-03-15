import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'english' | 'sinhala'>('english');
  
  useEffect(() => {
    // Set page title based on active language tab
    document.title = activeTab === 'english' 
      ? 'Police Complaint Report - Unauthorized Demolition Case' 
      : 'පොලිස් පැමිණිලි වාර්තාව - අනවසර ඉඩම් විනාශය';
  }, [activeTab]);
  return (
    <div className="complaint-container">
      <div className="tabs-container">
        <button 
          className={`tab-button ${activeTab === 'english' ? 'active' : ''}`}
          onClick={() => setActiveTab('english')}
        >
          English
        </button>
        <button 
          className={`tab-button ${activeTab === 'sinhala' ? 'active' : ''}`}
          onClick={() => setActiveTab('sinhala')}
        >
          සිංහල
        </button>
      </div>
      {activeTab === 'english' ? (
        <>
        <div className="complaint-header">
          <div className="draft-label">DRAFT</div>
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
              <h4>Video: Before Demolition</h4>
              <video controls className="evidence-video">
                <source 
                  src="https://ik.imagekit.io/mhvgbp9xk/land-images/before-demolition-video.mp4?updatedAt=1742002701977" 
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <p className="caption">Video evidence showing the property before any demolition work was carried out.</p>
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
        </>
      ) : (
        <>
        <div className="complaint-header">
          <div className="draft-label">කෙටුම්පත</div>
          <div className="logo-container">
            <img 
              src="https://ik.imagekit.io/mhvgbp9xk/land-images/sri-lanka-police-logo-920BA57BE5-seeklogo.com.png?updatedAt=1742002983464" 
              alt="Sri Lanka Police Logo" 
              className="police-logo"
            />
          </div>
          <h1>පොලිස් පැමිණිලි වාර්තාව</h1>
        </div>
        
        <div className="complaint-content">
          <h2>විෂය: ඔප්පු අංක 14999 හි විස්තර කර ඇති ඉඩමට අනවසරයෙන් අත්පත් කර ගැනීම සහ පොදු මාර්ගය විනාශ කිරීම</h2>
          
          <div className="section">
            <h3>පැමිණිලි විස්තර:</h3>
            
            <p>
              මම, <strong>එම්.එෆ්.එම්. ෆස්රින්</strong>, <strong>412, බුලුගොහොටැන්න, කේ, බටුගොඩ, මහනුවර. 20850</strong> හි පදිංචි, 
              මාගේ දේපළට යාබදව පදිංචි අසල්වැසියන්ට එරෙහිව අපගේ දේපළ අතර බෙදා ගන්නා පොදු ප්‍රවේශ මාර්ගය අනවසරයෙන් විනාශ කිරීම 
              සහ වෙනස් කිරීම සම්බන්ධයෙන් විධිමත් පැමිණිල්ලක් ගොනු කිරීමට කැමැත්තෙමි. මෙම දේපළ නීත්‍යානුකූලව 
              <strong>ඔප්පු අංක 14999</strong> හි විස්තර කර ඇති අතර, <strong>මහනුවර ඉඩම් ලේඛනාගාරයේ</strong> ලියාපදිංචි කර ඇති අතර, 
              එහි අනුපිටපතක් <strong>2024 ජූලි 25</strong> වන දින ඉදිරිපත් කරන ලදී. අසල්වැසියන් මගෙන් හෝ වෙනත් අදාළ පාර්ශ්වයන්ගෙන් 
              පූර්ව අවසරයක් හෝ අනුමැතියක් ලබා නොගෙන, එම මාර්ගය භාවිතා කරන අනෙකුත් දේපළ හිමියන් ඇතුළුව, ප්‍රවේශ මාර්ගය 
              විනාශ කිරීමට සහ වෙනස් කිරීමට ක්‍රියාකාරීව කටයුතු කරමින් සිටිති.
            </p>
            
            <p>
              මෙම තත්ත්වය ප්‍රවේශයට සැලකිය යුතු අපහසුතාවයක් සහ බාධාවක් ඇති කරන අතර, මාගේ නීත්‍යානුකූල ඉඩම් කොටසට 
              සහ බෙදාගත් ප්‍රවේශ මාර්ගයට අත්පත් කර ගනිමින් පවතී. විශේෂයෙන්ම, මාගේ අසල්වැසියන් <strong>A9 මාර්ගයට</strong> 
              මුහුණලා ඇති ඔවුන්ගේ ඉඩම පුළුල් කිරීම සඳහා මාර්ගය සමතලා කිරීමට කටයුතු කර ඇත. මෙම වෙනස්කම කිසිදු 
              නීතිමය හෝ අන්‍යෝන්‍ය එකඟතාවයකින් තොරව සිදු කර ඇති අතර, එය බෙදාගත් ප්‍රවේශ මාර්ගයේ මුල් මායිම් සහ 
              මාගේ ලියාපදිංචි දේපළ මායිම්වලට බලපෑම් ඇති කරයි.
            </p>
            
            <p>
              ඉහත සඳහන් <strong>ඔප්පු අංක 14999</strong> අනුව, <strong>බලයලත් මිනින්දෝරු ඩී.එම්.ඒ.සී. දිසානායක</strong> 
              විසින් සකස් කරන ලද <strong>2024 ජූලි 18 දිනැති සැලසුම් අංක 5208</strong> හි දක්වා ඇති <strong>කොටස් අංක 1</strong> 
              ලෙස විස්තර කර ඇති මාගේ දේපළ, <strong>බලයලත් මිනින්දෝරු ඩී. එම්. ජයරත්න</strong> විසින් සකස් කරන ලද 
              <strong>සැලසුම් අංක 654</strong> හි <strong>කොටස් අංක 2 ලෙස සලකුණු කර ඇති අඩි 10ක් පළල ප්‍රවේශය</strong> ඔස්සේ 
              සහ ඒ හරහා අනෙකුත් හිමිකරුවන් සමඟ පොදුවේ භාවිතා කිරීමට මාර්ග අයිතිය සහ වෙනත් සමාන අයිතිවාසිකම් ඇතුළත් වේ. 
              මෙම ප්‍රවේශ මාර්ගය හානියට පත් වෙමින් සහ වෙනස් වෙමින් පවතී. ඔවුන් එම <strong>සැලසුම් අංක 654</strong> හි 
              <strong>කොටස් අංක 2</strong> හි ඔවුන්ගේ ප්‍රදේශය පුළුල් කරමින් සිටින බව මම විශ්වාස කරමි, එය අපගේ ඔප්පුවල 
              සඳහන් පරිදි පොදු මාර්ග අයිතියට බාධා කරයි.
            </p>
          </div>
          
          <div className="section">
            <h3>සාක්ෂි:</h3>
            
            <p>
              සිදු කර ඇති හානිය සහ වෙනස්කම් පිළිබඳ පැහැදිලි අවබෝධයක් ලබා දීම සඳහා, මම පහත සාක්ෂි ඉදිරිපත් කරමි:
            </p>
            
            <div className="evidence-container">
              <div className="evidence-item">
                <h4>රූපය: විනාශයට පෙර</h4>
                <img 
                  src="https://ik.imagekit.io/mhvgbp9xk/land-images/before-demolition-image.jpeg?updatedAt=1742002669126" 
                  alt="විනාශයට පෙර" 
                  className="evidence-image"
                />
                <p className="caption">අනවසර වැඩ කටයුතු සිදු කිරීමට පෙර ප්‍රවේශ මාර්ගයේ මුල් තත්ත්වය පෙන්වයි.</p>
              </div>
              
              <div className="evidence-item">
                <h4>වීඩියෝව: විනාශයට පෙර</h4>
                <video controls className="evidence-video">
                  <source 
                    src="https://ik.imagekit.io/mhvgbp9xk/land-images/before-demolition-video.mp4?updatedAt=1742002701977" 
                    type="video/mp4"
                  />
                  ඔබගේ බ්‍රවුසරය වීඩියෝ ටැගය සඳහා සහාය නොදක්වයි.
                </video>
                <p className="caption">විනාශයට පෙර දේපළේ තත්ත්වය පෙන්වන වීඩියෝ සාක්ෂි.</p>
              </div>
              
              <div className="evidence-item">
                <h4>රූපය: විනාශයෙන් පසු</h4>
                <img 
                  src="https://ik.imagekit.io/mhvgbp9xk/land-images/after-demolition.jpeg?updatedAt=1742002625396" 
                  alt="විනාශයෙන් පසු" 
                  className="evidence-image"
                />
                <p className="caption">අනවසර වැඩ කටයුතු සිදු කිරීමෙන් පසු ප්‍රවේශ මාර්ගයේ වත්මන් තත්ත්වය පෙන්වයි.</p>
              </div>
              
              <div className="evidence-item">
                <h4>වීඩියෝව: විනාශයෙන් පසු</h4>
                <video controls className="evidence-video">
                  <source 
                    src="https://ik.imagekit.io/mhvgbp9xk/land-images/after-demolition-video.mp4?updatedAt=1742002789634" 
                    type="video/mp4"
                  />
                  ඔබගේ බ්‍රවුසරය වීඩියෝ ටැගය සඳහා සහාය නොදක්වයි.
                </video>
                <p className="caption">විනාශයෙන් පසු දේපළේ තත්ත්වය පෙන්වන වීඩියෝ සාක්ෂි.</p>
              </div>
            </div>
          </div>
          
          <div className="section">
            <h3>ක්‍රියාමාර්ග සඳහා ඉල්ලීම:</h3>
            
            <p>
              මෙම වෙනස්කම් බෙදාගත් ප්‍රවේශ මාර්ගයට හානි කිරීම පමණක් නොව, ඉඩමේ භෞතික ව්‍යුහය නීති විරෝධී ලෙස 
              වෙනස් කිරීමද සිදු කරයි. මෙය විසඳුමක් නොලැබුණහොත්, තවදුරටත් නීතිමය සංකීර්ණතා ඇති වනු ඇතැයි මම විශ්වාස කරමි. 
              මම මෙම කරුණ පිළිබඳව වහාම පරීක්ෂණයක් සිදු කරන ලෙස සහ පහත ක්‍රියාමාර්ග ගන්නා ලෙස ඉල්ලා සිටිමි:
            </p>
            
            <ol>
              <li><strong>තවදුරටත් සිදු කරන විනාශකාරී සහ වෙනස්කම් කටයුතු නතර කිරීම.</strong></li>
              <li><strong>ඔප්පු අංක 14999</strong> සහ ඊට අදාළ සැලසුම්වල විස්තර කර ඇති පරිදි <strong>බෙදාගත් ප්‍රවේශ මාර්ගය 
                එහි මුල් තත්ත්වයට සහ පළලට නැවත පත් කිරීම.</strong></li>
              <li>ප්‍රවේශ මාර්ගයට හෝ ලියාපදිංචි දේපළ මායිම්වලට බලපාන තවදුරටත් කිසිදු වැඩක් සිදු කිරීමට පෙර 
                <strong>අවශ්‍ය සියලුම අවසර සහ අනුමැතීන් ලබා ගැනීම තහවුරු කිරීම.</strong></li>
              <li><strong>අසල්වැසියන් ඔවුන් සතු ඉඩම්වල මායිම් තුළ ක්‍රියා කරන බව තහවුරු කිරීම.</strong></li>
            </ol>
            
            <p>
              මෙම පැමිණිල්ල බරපතල ලෙස සලකා බලා, තවදුරටත් හානි සිදු නොවන බවත්, මාගේ <strong>ඔප්පුවේ</strong> සඳහන් පරිදි 
              බෙදාගත් ප්‍රවේශ මාර්ගය භාවිතා කිරීමේ අයිතිය ඇතුළු මාගේ දේපළ අයිතිවාසිකම් ගරු කරන බවත් තහවුරු කිරීම සඳහා 
              සුදුසු ක්‍රියාමාර්ග ගන්නා ලෙස කාරුණිකව ඉල්ලා සිටිමි.
            </p>
          </div>
          
          <div className="section signature">
            <p>මෙම කරුණට ඔබගේ අවධානය යොමු කිරීම ගැන ස්තූතියි.</p>
            
            <p><strong>ගෞරවයෙන්,</strong><br />
            <strong>එම්.එෆ්.එම්. ෆස්රින්</strong><br />
            <strong>412, බුලුගොහොටැන්න, කේ, බටුගොඩ, මහනුවර. 20850</strong><br />
            <strong>ඊමේල්: mfmfazrin1986@gmail.com</strong><br />
            <strong>ජංගම දුරකථන: +94772049123</strong><br />
            <strong>හැඳුනුම්පත් අංකය: 862720423V</strong></p>
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default Home;

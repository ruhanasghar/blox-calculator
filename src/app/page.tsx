'use client';
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [otherSize, setOtherSize] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(e.target.value);
    if (e.target.value !== 'other') {
      setOtherSize('');
    }
  };

  const progressWidth = ((currentStep - 1) / 4) * 100;

  return (
    <>
      <div className="top-banner">
        <div className="banner-content">
          <div className="company-logo">BLOX</div>
          <div className="progress-bar">
            {[1, 2, 3, 4, 5].map((step) => (
              <div key={step} className={`progress-step ${step === currentStep ? 'active' : ''} ${step < currentStep ? 'completed' : ''}`}>
                <div className="step-circle">{step}</div>
                <div className="step-text">
                  {step === 1 && 'Property Type'}
                  {step === 2 && 'Property Size'}
                  {step === 3 && 'Basement'}
                  {step === 4 && 'Package Type'}
                  {step === 5 && 'Contact Info'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="main-wrapper">
        <div className="form-container">
          {/* <h2>Please answer all questions</h2> */}
          <form onSubmit={handleNext}>
            <div className={`question-section ${currentStep === 1 ? 'visible' : ''}`}>
              <h3>Please specify your Property type?</h3>
              <div className="radio-group">
                <label className="radio-option" htmlFor="residential">
                  <input type="radio" id="residential" name="propertyType" required={currentStep === 1} />
                  <span>Residential</span>
                </label>
                
                <label className="radio-option" htmlFor="commercial">
                  <input type="radio" id="commercial" name="propertyType" />
                  <span>Commercial</span>
                </label>
              </div>
            </div>

            <div className={`question-section ${currentStep === 2 ? 'visible' : ''}`}>
              <h3>What is the size of your Property?</h3>
              <div className="radio-group">
                <label className="radio-option" htmlFor="10marla">
                  <input 
                    type="radio" 
                    id="10marla" 
                    name="propertySize" 
                    value="10marla"
                    onChange={handleSizeChange}
                    required={currentStep === 2} 
                  />
                  <span>10 Marla</span>
                </label>
                
                <label className="radio-option" htmlFor="1kanal">
                  <input 
                    type="radio" 
                    id="1kanal" 
                    name="propertySize" 
                    value="1kanal"
                    onChange={handleSizeChange}
                  />
                  <span>1 Kanal</span>
                </label>
                
                <label className="radio-option" htmlFor="2kanal">
                  <input 
                    type="radio" 
                    id="2kanal" 
                    name="propertySize" 
                    value="2kanal"
                    onChange={handleSizeChange}
                  />
                  <span>2 Kanal</span>
                </label>
                
                <label className="radio-option" htmlFor="other">
                  <input 
                    type="radio" 
                    id="other" 
                    name="propertySize" 
                    value="other"
                    onChange={handleSizeChange}
                  />
                  <span>Other</span>
                </label>
                
                {selectedSize === 'other' && currentStep === 2 && (
                  <div className="other-size-input">
                    <input 
                      type="number" 
                      placeholder="Please specify size in Marlas" 
                      value={otherSize}
                      onChange={(e) => setOtherSize(e.target.value)}
                      className="size-input"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className={`question-section ${currentStep === 3 ? 'visible' : ''}`}>
              <h3>Does your Property have basement?</h3>
              <div className="radio-group">
                <label className="radio-option" htmlFor="yes">
                  <input type="radio" id="yes" name="hasBasement" required={currentStep === 3} />
                  <span>Yes</span>
                </label>
                
                <label className="radio-option" htmlFor="no">
                  <input type="radio" id="no" name="hasBasement" />
                  <span>No</span>
                </label>
              </div>
            </div>

            <div className={`question-section ${currentStep === 4 ? 'visible' : ''}`}>
              <h3>What is the type of services you are looking for?</h3>
              <div className="radio-group">
                <label className="radio-option service-card" htmlFor="architecture">
                  <input type="radio" id="architecture" name="serviceType" required={currentStep === 4} />
                  <div>
                    <h4>Architecture services</h4>
                    <p>Complete architectural design and planning</p>
                  </div>
                </label>
                
                <label className="radio-option service-card" htmlFor="interior">
                  <input type="radio" id="interior" name="serviceType" />
                  <div>
                    <h4>Interior Design Services</h4>
                    <p>Full interior design and decoration</p>
                  </div>
                </label>
                
                <label className="radio-option service-card" htmlFor="both">
                  <input type="radio" id="both" name="serviceType" />
                  <div>
                    <h4>Architecture plus interior</h4>
                    <p>Complete end-to-end design solution</p>
                  </div>
                </label>
              </div>
            </div>

            <div className={`question-section ${currentStep === 5 ? 'visible' : ''}`}>
              <h3>Your Contact Information</h3>
              <input type="text" placeholder="Full Name" required={currentStep === 5} />
              <input type="email" placeholder="Email" required={currentStep === 5} />
              <div className="phone-input">
                <select className="country-code">
                  <option value="+92">🇵🇰 +92</option>
                </select>
                <input type="tel" placeholder="Phone number" required={currentStep === 5} />
              </div>
              
              <div className="terms">
                <p>By submitting this form, you agree to the <a href="#">privacy policy</a> & <a href="#">terms and conditions</a></p>
                <p>This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.</p>
              </div>
            </div>

            <div className="button-group">
              <button 
                type="button" 
                className={`back-btn ${currentStep === 1 ? 'invisible' : ''}`}
                onClick={handleBack}
              >
                BACK
              </button>
              <button type="submit" className="submit-btn">
                {currentStep === 5 ? 'SUBMIT' : 'NEXT'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

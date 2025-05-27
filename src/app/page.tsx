'use client';
import { useState, FormEvent } from "react";
import Image from "next/image";

interface FormData {
  propertyType: string;
  propertySize: string;
  otherSize?: string;
  hasBasement: string;
  serviceType: string;
  fullName: string;
  email: string;
  phoneNumber: string;
}

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    propertyType: '',
    propertySize: '',
    otherSize: '',
    hasBasement: '',
    serviceType: '',
    fullName: '',
    email: '',
    phoneNumber: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = async (e: FormEvent) => {
    e.preventDefault();
    
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      try {
        const response = await fetch('/api/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }

        // Redirect to thank you page instead of showing alert
        window.location.href = '/thank-you';
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Failed to submit form. Please try again.');
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (value !== 'other') {
      setFormData(prev => ({
        ...prev,
        otherSize: undefined
      }));
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
                  <input 
                    type="radio" 
                    id="residential" 
                    name="propertyType" 
                    value="residential"
                    checked={formData.propertyType === 'residential'}
                    onChange={handleInputChange}
                    required={currentStep === 1} 
                  />
                  <span>Residential</span>
                </label>
                
                <label className="radio-option" htmlFor="commercial">
                  <input 
                    type="radio" 
                    id="commercial" 
                    name="propertyType"
                    value="commercial"
                    checked={formData.propertyType === 'commercial'}
                    onChange={handleInputChange}
                  />
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
                    checked={formData.propertySize === '10marla'}
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
                    checked={formData.propertySize === '1kanal'}
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
                    checked={formData.propertySize === '2kanal'}
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
                    checked={formData.propertySize === 'other'}
                    onChange={handleSizeChange}
                  />
                  <span>Other</span>
                </label>
                
                {formData.propertySize === 'other' && currentStep === 2 && (
                  <div className="other-size-input">
                    <input 
                      type="number" 
                      placeholder="Please specify size in Marlas" 
                      value={formData.otherSize}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        otherSize: e.target.value
                      }))}
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
                  <input 
                    type="radio" 
                    id="yes" 
                    name="hasBasement" 
                    value="yes"
                    checked={formData.hasBasement === 'yes'}
                    onChange={handleInputChange}
                    required={currentStep === 3} 
                  />
                  <span>Yes</span>
                </label>
                
                <label className="radio-option" htmlFor="no">
                  <input 
                    type="radio" 
                    id="no" 
                    name="hasBasement" 
                    value="no"
                    checked={formData.hasBasement === 'no'}
                    onChange={handleInputChange}
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            <div className={`question-section ${currentStep === 4 ? 'visible' : ''}`}>
              <h3>What is the type of services you are looking for?</h3>
              <div className="radio-group">
                <label className="radio-option service-card" htmlFor="architecture">
                  <input 
                    type="radio" 
                    id="architecture" 
                    name="serviceType" 
                    value="architecture"
                    checked={formData.serviceType === 'architecture'}
                    onChange={handleInputChange}
                    required={currentStep === 4} 
                  />
                  <div>
                    <h4>Architecture services</h4>
                    <p>Complete architectural design and planning</p>
                  </div>
                </label>
                
                <label className="radio-option service-card" htmlFor="interior">
                  <input 
                    type="radio" 
                    id="interior" 
                    name="serviceType" 
                    value="interior"
                    checked={formData.serviceType === 'interior'}
                    onChange={handleInputChange}
                  />
                  <div>
                    <h4>Interior Design Services</h4>
                    <p>Full interior design and decoration</p>
                  </div>
                </label>
                
                <label className="radio-option service-card" htmlFor="both">
                  <input 
                    type="radio" 
                    id="both" 
                    name="serviceType" 
                    value="both"
                    checked={formData.serviceType === 'both'}
                    onChange={handleInputChange}
                  />
                  <div>
                    <h4>Architecture plus interior</h4>
                    <p>Complete end-to-end design solution</p>
                  </div>
                </label>
              </div>
            </div>

            <div className={`question-section ${currentStep === 5 ? 'visible' : ''}`}>
              <h3>Your Contact Information</h3>
              <div className="contact-form">
                <div className="input-group">
                  <input 
                    type="text" 
                    name="fullName"
                    placeholder="Full Name" 
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required={currentStep === 5} 
                    className="contact-input"
                  />
                </div>
                <div className="input-group">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required={currentStep === 5} 
                    className="contact-input"
                  />
                </div>
                <div className="input-group phone-group">
                  <div className="phone-input">
                    <div className="country-code">
                      <span>PK</span>
                      <span>+92</span>
                    </div>
                    <input 
                      type="tel" 
                      name="phoneNumber"
                      placeholder="Phone number" 
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required={currentStep === 5} 
                      className="phone-number-input"
                    />
                  </div>
                </div>
                
                <div className="terms">
                  <p>By submitting this form, you agree to the <a href="#">privacy policy</a> & <a href="#">terms and conditions</a></p>
                  <p>This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.</p>
                </div>
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

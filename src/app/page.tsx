import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <div className="progress-bar">
        <div className="progress-step active">
          <div className="step-circle">1</div>
          <div className="step-text">Question 1</div>
        </div>
        <div className="progress-step">
          <div className="step-circle">2</div>
          <div className="step-text">Question 2</div>
        </div>
        <div className="progress-step">
          <div className="step-circle">3</div>
          <div className="step-text">Question 3</div>
        </div>
        <div className="progress-step">
          <div className="step-circle">4</div>
          <div className="step-text">Question 4</div>
        </div>
        <div className="progress-step">
          <div className="step-circle">5</div>
          <div className="step-text">Contact Info</div>
        </div>
      </div>

      <div className="form-container">
        <h2>Please answer all questions</h2>
        <form>
          <div className="question-section" id="q1">
            <h3>What is your preferred design style?</h3>
            <div className="radio-group">
              <input type="radio" id="modern" name="style" required />
              <label htmlFor="modern">Modern</label>
              
              <input type="radio" id="traditional" name="style" />
              <label htmlFor="traditional">Traditional</label>
              
              <input type="radio" id="contemporary" name="style" />
              <label htmlFor="contemporary">Contemporary</label>
            </div>
          </div>

          <div className="question-section" id="q2">
            <h3>What is your budget range?</h3>
            <div className="radio-group">
              <input type="radio" id="budget1" name="budget" required />
              <label htmlFor="budget1">$1000-$5000</label>
              
              <input type="radio" id="budget2" name="budget" />
              <label htmlFor="budget2">$5000-$10000</label>
              
              <input type="radio" id="budget3" name="budget" />
              <label htmlFor="budget3">$10000+</label>
            </div>
          </div>

          <div className="question-section" id="q3">
            <h3>What is your timeline?</h3>
            <div className="radio-group">
              <input type="radio" id="time1" name="timeline" required />
              <label htmlFor="time1">1-3 months</label>
              
              <input type="radio" id="time2" name="timeline" />
              <label htmlFor="time2">3-6 months</label>
              
              <input type="radio" id="time3" name="timeline" />
              <label htmlFor="time3">6+ months</label>
            </div>
          </div>

          <div className="question-section" id="q4">
            <h3>Which rooms need renovation?</h3>
            <div className="checkbox-group">
              <input type="checkbox" id="living" name="rooms" />
              <label htmlFor="living">Living Room</label>
              
              <input type="checkbox" id="bedroom" name="rooms" />
              <label htmlFor="bedroom">Bedroom</label>
              
              <input type="checkbox" id="kitchen" name="rooms" />
              <label htmlFor="kitchen">Kitchen</label>
            </div>
          </div>

          <div className="question-section" id="q5">
            <h3>Your Contact Information</h3>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <div className="phone-input">
              <select className="country-code">
                <option value="+1">+1</option>
                <option value="+91">+91</option>
              </select>
              <input type="tel" placeholder="Phone number" required />
            </div>
          </div>

          <div className="button-group">
            <button type="button" className="back-btn">BACK</button>
            <button type="submit" className="submit-btn">NEXT</button>
          </div>
        </form>
      </div>
    </div>
  );
}

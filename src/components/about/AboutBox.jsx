

const AboutBox = () => {
  return (
    <div className="about_boxes grid">
        <div className="about_box">
            <i className="icon-fire about_icon"></i>

            <div>
                <h3 className="about_title">0</h3>
                <span className='about_subtitle'>Project Completed</span>
            </div>
        </div>
        <div className="about_box">
            <i className="icon-cup about_icon"></i>

            <div>
                <h3 className="about_title">5785</h3>
                <span className='about_subtitle'>Cup of coffee</span>
            </div>
        </div>
        <div className="about_box">
            <i className="icon-people about_icon"></i>

            <div>
                <h3 className="about_title">0</h3>
                <span className='about_subtitle'>Satisfied clients</span>
            </div>
        </div>
        <div className="about_box">
            <i className="icon-badge about_icon"></i>

            <div>
                <h3 className="about_title">0</h3>
                <span className='about_subtitle'>Nominees winner</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox
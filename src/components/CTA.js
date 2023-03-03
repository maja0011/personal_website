import Resume from '../resume/Adebayo_Majaro_Resume.pdf'
function CTA (){
    return (
        <div className='cta'>
            <a href={Resume} download>Download Resume</a>
            <a href='#contact'>Let's Talk</a>
        </div>
    );
}

export default CTA;
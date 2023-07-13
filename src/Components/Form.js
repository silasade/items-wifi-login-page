import web from "../images/web.png"
import email from "../images/email60.png"
import gmail from "../images/gmail4.png"
import staff from "../images/Stafficon.png"
import faq from "../images/faq.png"
import lms from "../images/lms3.png"




function Form(){
    

   
    return(
        <div>
        <form>
            <input  type="text" placeholder="Enter Your Username..."  required/>
            <input  type="password" placeholder="Enter Your Password..."  required/>
            <input type="submit" value="LOGIN NOW"  />
            
            
            <div className="trouble">
                <a className="troubles" href="">Trouble Login in? </a>
               
            </div>
            <div className="icon">
                
                    <a className="a icons "  href="https://ui.edu.ng/"> <img className="img-fluid" src={web} alt="not found"/></a>
                    <a className="a icons "  href="https://www.ui.edu.ng/Staff-list"> <img className="img-fluid" src={staff} alt="not found"/></a>                
                    <a className="a icons "  href="https://lms.ui.edu.ng/"> <img className="img-fluid" src={lms} alt="not found"/></a>                
                    <a className="a icons "  href="https://support.ui.edu.ng/"> <img className="img-fluid" src={faq} alt="not found"/></a>
                    <a className="a icons "  href="https://mail.ui.edu.ng/"><img className="img-fluid" src={email} alt="not found"/></a>
                    <a className="a icons "  href="https://mail.stu.ui.edu.ng/"> <img className="img-fluid" src={gmail} alt="not found"/></a>

                
            </div>
            </form>
            </div>
    )
}
export default Form
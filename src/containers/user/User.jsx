import React, { Component } from 'react'
import '../user/User.css'


export class User extends Component {
    state ={
        profileImg: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    }
    imageHandler = (e) =>{
        const reader = new FileReader()
        reader.onload = () => {
            if(reader.readyState === 2){
                this.setState({profileImg: reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
  render() {
      const{profileImg} = this.state
    return (
        
        <div> 
            <form method="" >
                <div className='pageImage'>git status
                        <div className='containerImage'>
                            <div className="img-holder">
                                <img src={profileImg} alt="" id="img" className="img" />
                            </div>
                            
                            <input type="file" name="image-upload" id="input" accept="image/*" onChange={this.imageHandler} />
                            <div className="label">
                                <label htmlFor="input" className="image-upload">
                                    <i className="material-icons">add_photo_alternate</i>
                                    Choose your photo
                                </label>
                            </div>

                        </div>
                          <div className='profile-head'>
                              <h5>Jonh Doe</h5>
                             <h6>Photographer</h6>
                            <p className='profile-rating mt-3 mb-5'>RANKING <span>***</span></p>
                         </div>

                         <div className='form-inputs'>
                             <label>INFORMATION CONFIDENTIELLE</label> <br /> <br /> 
                             <div>
                                <label className='form-label'>First name</label> 
                                 <input  className='form-input' type=' text '  name='FirstName' placeholder='John Alexandre' />
                                 </div>
                                 <br />
                                 <div>
                                <label className='form-label'>Last name</label>
                              <input  className='form-input' type=' text '  name='LastName' placeholder=' Doe' />
                              </div>
                              <br />
                               <div>
                            <label className='form-label'>Year of birth</label>
                             <input  className='form-input' type=' text '  name='HBD' placeholder='11-12-1988' />
                             </div>
                             <br />
                             <div>
                             <label className='form-label'>Phone</label>
                            <input  className='form-input' type=' text '  name='Phone' placeholder=' +1 506-254-6395' />
                            </div>
                            <br />
                              <div>
                          <label className='form-label'>E-mail</label>
                         <input  className='form-input' type=' text '  name='Mail' placeholder=' jonhdoe@gmail.com' />

                        <br />
                        <br />
                         <button className="btn btn-primary" type="button">Edit</button>
                         </div>

                      
                      </div>
                         
                                                
                    </div>

                   

                    </form>

        </div>
     
    )
  }
}

export default User
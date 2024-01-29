import { Header } from '@/components/Header'
import React from 'react'


export default function EditUser({user, details}) {
  var user=user[0]
  var details=details[0]

  return (
    <div>
      <Header />
      
      <h2>{user.name} ren informazioa</h2>


      <div className="container mt-5">
        
  <form action="/admin/users/update" className="needs-validation" novalidate>
    <input type="hidden" defaultValue={user.id_user} name="id_user" />

    <div className="form-group">
      <label htmlFor="email" className="form-label">Email</label>
      <input type="text" id="email" name="email" className="form-control" defaultValue={user.email} required />
      <div className="invalid-feedback">
        Please enter the email.
      </div>
    </div>

    <div className="form-group">
      <label htmlFor="role" className="form-label">Role id</label>
      <input type="text" id="role" name="role" className="form-control" defaultValue={user.id_role} required />
      <div className="invalid-feedback">
        Please enter the role id.
      </div>
    </div>

    <div className="form-group">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text" id="name" name="name" className="form-control" defaultValue={details.name} required />
      <div className="invalid-feedback">
        Please enter your name.
      </div>
    </div>

    <div className="form-group">
      <label htmlFor="country" className="form-label">Country</label>
      <input type="text" id="country" name="country" className="form-control" defaultValue={details.country} required />
      <div className="invalid-feedback">
        Please enter your country.
      </div>
    </div>

    <div className="form-group">
      <label htmlFor="province" className="form-label">Province</label>
      <input type="text" id="province" name="province" className="form-control" defaultValue={details.province} required />
      <div className="invalid-feedback">
        Please enter your province.
      </div>
    </div>

    <div className="form-group">
      <label htmlFor="city" className="form-label">City</label>
      <input type="text" id="city" name="city" className="form-control" defaultValue={details.city} required />
      <div className="invalid-feedback">
        Please enter your city.
      </div>
    </div>

    <div className="form-group">
      <label htmlFor="birthdate" className="form-label">Birthdate</label>
      <input type="text" id="birthdate" name="birthdate" className="form-control" defaultValue={details.birthdate} required />
      <div className="invalid-feedback">
        Please enter your birthdate.
      </div>
    </div>

    <div className="form-group">
      <label htmlFor="gender" className="form-label">Gender</label>
      <input type="text" id="gender" name="gender" className="form-control" defaultValue={details.gender} required />
      <div className="invalid-feedback">
        Please enter your gender.
      </div>
    </div>

    <div className="form-group">
      <label htmlFor="bio" className="form-label">Bio</label>
      <input type="text" id="bio" name="bio" className="form-control" defaultValue={details.bio} required />
      <div className="invalid-feedback">
        Please enter your bio.
      </div>
    </div>

    <div className="form-group">
      <label htmlFor="phone_number" className="form-label">Phone Number</label>
      <input type="text" id="phone_number" name="phone_number" className="form-control" defaultValue={details.phone_number} required />
      <div className="invalid-feedback">
        Please enter your phone number.
      </div>
    </div>

    <br />
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
</div>



    </div>
  )
}

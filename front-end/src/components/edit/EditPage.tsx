import React from 'react'

export default function EditPage() {
  return (
    <>
    <form>
        <div className="edit-container">
            <button className="close">SAVE</button>
        </div>
        <div className="edit-profile">Edit Profile</div>
        <div className="input-container">
            <label htmlFor="">Display name</label>
            <input type="text" placeholder='dep trai vl' />
        </div>
    </form>
    </>
  )
}
